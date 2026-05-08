import { useEffect, useState } from 'react';

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  
  const images = [
    { id: 1, title: "Writing Session", description: "Deep in thought", icon: "✍️" },
    { id: 2, title: "Book Signing", description: "Connecting with readers", icon: "📖" },
    { id: 3, title: "Office View", description: "My sanctuary", icon: "🏠" },
    { id: 4, title: "Studio", description: "Where creativity flows", icon: "🎨" },
    { id: 5, title: "Workshop", description: "Teaching and inspiring", icon: "🎤" },
    { id: 6, title: "Event", description: "Literary celebration", icon: "🎉" }
  ];

  useEffect(() => {
    const timeouts = images.map((_, index) => {
      return setTimeout(() => {
        setVisibleImages(prev => [...prev, index]);
      }, index * 150);
    });
    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-black">Photo</span>
          <span className="text-red-600"> Gallery</span>
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A glimpse into my world - from writing sessions to events and everything in between.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={image.id}
            className={`group relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-700 ${
              visibleImages.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative h-64 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-6xl block mb-3">{image.icon}</span>
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-all duration-300"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
              <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                <p className="text-gray-300 text-sm">{image.description}</p>
                <div className="w-12 h-0.5 bg-red-600 mt-3 group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;