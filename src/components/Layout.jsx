import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Layout = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/blog', name: 'Blog' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-2xl' : 'bg-black/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <Link 
              to="/" 
              className="text-2xl font-bold tracking-tight transition-all duration-300 hover:scale-105"
            >
              <span className="text-white">Adele</span>
              <span className="text-red-600"> Hewett</span>
              <span className="text-white"> Veal</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md overflow-hidden group ${
                      location.pathname === link.path
                        ? 'text-red-600'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {location.pathname === link.path && (
                      <span className="absolute inset-0 bg-red-600/10 rounded-md"></span>
                    )}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                ))}
              </div>
              
              {/* Buy Now Button - Stands out on the right */}
              <Link
                to="/books"
                className="ml-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
              >
                Buy Now
              </Link>
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
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:bg-red-600/20 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* Buy Now button for mobile */}
              <Link
                to="/books"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 mt-2 bg-red-600 text-white font-semibold rounded-md text-center hover:bg-red-700 transition-all duration-300"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with padding for fixed navbar */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-red-600">Adele Hewett</span> Veal
              </h3>
              <p className="text-gray-400 text-sm">Author & Entrepreneur</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-red-600">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-red-600 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-red-600 transition-colors">About</Link></li>
                <li><Link to="/blog" className="hover:text-red-600 transition-colors">Blog</Link></li>
                <li><Link to="/gallery" className="hover:text-red-600 transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
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