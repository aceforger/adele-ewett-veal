import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative red accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full filter blur-3xl opacity-5"></div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            {/* Name with animation */}
            <div className="animate-slideIn">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                <span className="text-black">Adele</span>
                <span className="text-red-600"> Hewett</span>
                <span className="text-black"> Veal</span>
              </h1>
            </div>
            
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8 animate-scaleIn"></div>
            
            {/* Welcome text with animation */}
            <div className="animate-fadeIn">
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Welcome to the official website of Adele Hewett Veal, where creativity meets enterprise. 
                Here, you'll find everything about my novels, including exclusive teasers, behind-the-scenes 
                insights, and updates on upcoming releases. Additionally, discover more about Hewett Enterprises, 
                LLC, my multifaceted business venture dedicated to inspiring and empowering others through 
                storytelling and beyond.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
              <button 
                onClick={() => navigate('/books')}
                className="px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Explore Novels
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="px-8 py-3 border-2 border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "📚", title: "Novels", desc: "Discover my latest works and exclusive teasers.", delay: 0, path: "/books" },
            { icon: "✨", title: "Behind the Scenes", desc: "Get insights into my creative process.", delay: 100, path: "/blog" },
            { icon: "🚀", title: "Hewett Enterprises", desc: "Empowering others through storytelling.", delay: 200, path: "/about" }
          ].map((item, idx) => (
            <div 
              key={idx}
              onClick={() => navigate(item.path)}
              className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeIn cursor-pointer"
              style={{ animationDelay: `${item.delay}ms`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
              <div className="mt-4 w-12 h-0.5 bg-red-600 group-hover:w-24 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;