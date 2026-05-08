import { useEffect, useState } from 'react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleImages, setVisibleImages] = useState([]);

  const categories = ['all', 'events', 'behind-scenes', 'covers'];

  const allImages = [
    { id: 1, title: "Book Signing Event", description: "Connecting with readers", icon: "📖", category: "events" },
    { id: 2, title: "Writing Session", description: "Deep in thought", icon: "✍️", category: "behind-scenes" },
    { id: 3, title: "Beyond the Storm's Reach Cover", description: "Latest novel", icon: "🌊", category: "covers" },
    { id: 4, title: "Literary Festival", description: "Speaking at event", icon: "🎤", category: "events" },
    { id: 5, title: "Office View", description: "My sanctuary", icon: "🏠", category: "behind-scenes" },
    { id: 6, title: "Shadow in the Mirror Cover", description: "Psychological thriller", icon: "🪞", category: "covers" },
    { id: 7, title: "Workshop", description: "Teaching and inspiring", icon: "🎨", category: "events" },
    { id: 8, title: "Research Notes", description: "Behind the scenes", icon: "📝", category: "behind-scenes" },
    { id: 9, title: "The Jigsaw Effect Cover", description: "Suspense thriller", icon: "🧩", category: "covers" }
  ];

  const filteredImages = activeCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  useEffect(() => {
    setIsVisible(true);
    const timeouts = filteredImages.map((_, index) => {
      return setTimeout(() => {
        setVisibleImages(prev => [...prev, index]);
      }, index * 100);
    });
    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [activeCategory]);

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

      {/* Category Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gray-100 rounded-lg p-1 flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleImages([]);
              }}
              className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 capitalize ${
                activeCategory === category
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              {category.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
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
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-red-600/80 px-2 py-1 rounded capitalize">
                    {image.category}
                  </span>
                </div>
                <div className="w-12 h-0.5 bg-red-600 mt-3 group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No images found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;