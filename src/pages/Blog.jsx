import { useEffect, useState } from 'react';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [visiblePosts, setVisiblePosts] = useState([]);

  const categories = ['all', 'thoughts', 'updates', 'writing'];
  
  const allPosts = [
    {
      id: 1,
      title: "Journey Back to Me!",
      author: "Adele Hewett",
      date: "Jul 6, 2024",
      category: "thoughts",
      excerpt: "'Purpose' is the reason for which something is done. The reason something is created or exists. I have been asked many times, what is my purpose for writing? My answer is simple. I write to express a thought or concept that would lead my readers to a place of reflection and growth."
    },
    {
      id: 2,
      title: "Fear – Set backs",
      author: "Adele Hewett",
      date: "Jul 6, 2024",
      category: "thoughts",
      excerpt: "So, I guess we've all faced setbacks at one time or another. They come in many forms and at different times in our lives, testing our resilience and determination. When I reflect on my own setbacks, I can vividly imagine my mother standing before me."
    },
    {
      id: 3,
      title: "New Book Announcement: The Jigsaw Effect",
      author: "Adele Hewett",
      date: "Jun 15, 2024",
      category: "updates",
      excerpt: "I'm thrilled to announce my latest novel, 'The Jigsaw Effect: On The Edge of Trust' is now available! This suspenseful thriller follows private investigator Ryan Parrish through a deadly game of secrets."
    },
    {
      id: 4,
      title: "My Writing Process",
      author: "Adele Hewett",
      date: "May 20, 2024",
      category: "writing",
      excerpt: "Every author has a unique writing process. For me, it starts with a spark - a what-if question that grows into a full story. I usually begin my day with morning pages..."
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);

  useEffect(() => {
    setIsVisible(true);
    const timeouts = filteredPosts.map((_, index) => {
      return setTimeout(() => {
        setVisiblePosts(prev => [...prev, index]);
      }, index * 150);
    });
    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [activeCategory]);

  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-black">Latest</span>
          <span className="text-red-600"> Blog</span>
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Thoughts, stories, and ideas from Adele</p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 rounded-lg p-1 flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisiblePosts([]);
              }}
              className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 capitalize ${
                activeCategory === category
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Blog Posts */}
      <div className="space-y-8">
        {filteredPosts.map((post, index) => (
          <article 
            key={post.id}
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1 ${
              visiblePosts.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-8">
              <div className="flex items-center gap-3 text-sm mb-4 flex-wrap">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                  {post.category}
                </span>
                <span className="text-gray-500">{post.date}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-700">by {post.author}</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 hover:text-red-600 transition-colors cursor-pointer">
                {post.title}
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <button className="group inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all duration-300">
                Read More
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="w-12 h-0.5 bg-red-600 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No posts found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Blog;