import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('novels');
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/hero-bg.avif')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="relative overflow-hidden">
          {/* Decorative elements - adjusted for dark background */}
          <div className="absolute top-0 right-0 w-96 h-94 bg-red-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-94 bg-red-800 rounded-full filter blur-3xl opacity-10"></div>
          
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center">
              <div className="animate-slideIn">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                  <span className="text-white">Adele</span>
                  <span className="text-red-500"> Hewett</span>
                  <span className="text-white"> Veal</span>
                </h1>
              </div>
              
              <div className="w-24 h-1 bg-red-500 mx-auto mb-8 animate-scaleIn"></div>
              
              <div className="animate-fadeIn">
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  Welcome to the official website of Adele Hewett Veal, where creativity meets enterprise. 
                  Here, you'll find everything about my novels, including exclusive teasers, behind-the-scenes 
                  insights, and updates on upcoming releases.
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
                <button 
                  onClick={() => navigate('/books')}
                  className="px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Explore Novels
                </button>
                <button 
                  onClick={() => navigate('/about')}
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideIn { animation: slideIn 0.5s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Home;