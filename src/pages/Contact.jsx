import { useEffect, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-black">Get in</span>
          <span className="text-red-600"> Touch</span>
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">I'd love to hear from you</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-black to-gray-800 rounded-lg shadow-xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-300">adele@hewettenterprises.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-300">New York, NY</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-black mb-4">Follow Me</h3>
            <div className="flex justify-center gap-4">
              {['facebook', 'twitter', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <span className="capitalize text-sm">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-black mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;