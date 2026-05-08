import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Books from '../pages/Books';
import Blog from '../pages/Blog';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';


const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section for highlighting
      const sections = ['home', 'about', 'blog', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Get the navbar height dynamically
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.offsetHeight : 80;
    
    // Get element position
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  }
};

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'blog', name: 'Blog' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-2xl' : 'bg-black/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand - Click to scroll to top */}
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold tracking-tight transition-all duration-300 hover:scale-105"
            >
              <span className="text-white">Adele</span>
              <span className="text-red-600"> Hewett</span>
              <span className="text-white"> Veal</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md overflow-hidden group ${
                      activeSection === link.id
                        ? 'text-red-600'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {activeSection === link.id && (
                      <span className="absolute inset-0 bg-red-600/10 rounded-md"></span>
                    )}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </button>
                ))}
              </div>
              
              {/* Buy Now Button - Scrolls to Books section */}
              <button
                onClick={() => navigate('/books')}
                className="ml-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
              >
                Buy Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-2 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:bg-red-600/20 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => navigate('/books')}
                className="block w-full px-3 py-2 mt-2 bg-red-600 text-white font-semibold rounded-md text-center hover:bg-red-700 transition-all duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - All Sections (using existing pages) */}
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-red-600">Adele Hewett</span> Veal
              </h3>
              <p className="text-gray-400 text-sm">Author & Entrepreneur</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-red-600">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-red-600 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-red-600 transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('books')} className="hover:text-red-600 transition-colors">Books</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-red-600">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('blog')} className="hover:text-red-600 transition-colors">Blog</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-red-600 transition-colors">Gallery</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-red-600 transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-red-600">Connect</h4>
              <p className="text-gray-400 text-sm">Hewett Enterprises, LLC</p>
              <p className="text-gray-400 text-sm mt-2">© 2024 All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;