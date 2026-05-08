import { useEffect, useState } from 'react';

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState([]);
  
  const posts = [
    {
      id: 1,
      title: "Journey Back to Me!",
      author: "Adele Hewett",
      date: "Jul 6, 2024",
      category: "My thoughts",
      excerpt: "'Purpose' is the reason for which something is done. The reason something is created or exists. I have been asked many times, what is my purpose for writing? My answer is simple. I write to express a thought or concept that would lead my readers to a place of reflection and growth. Every word I pen is an invitation to explore the depths of human experience, to question, to feel, and to heal."
    },
    {
      id: 2,
      title: "Fear – Set backs",
      author: "Adele Hewett",
      date: "Jul 6, 2024",
      category: "My thoughts",
      excerpt: "So, I guess we've all faced setbacks at one time or another. They come in many forms and at different times in our lives, testing our resilience and determination. When I reflect on my own setbacks, I can vividly imagine my mother standing before me, her eyes filled with both concern and unwavering belief. 'Fear is just a season,' she would say. 'It passes, but your courage remains.'"
    }
  ];

  useEffect(() => {
    const timeouts = posts.map((_, index) => {
      return setTimeout(() => {
        setVisiblePosts(prev => [...prev, index]);
      }, index * 200);
    });
    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">Latest</span>
            <span className="text-red-600"> Blog</span>
          </h1>
          <div className="w-full h-1 bg-red-600"></div>
        </div>
        <p className="text-gray-600 mt-4">Thoughts, stories, and ideas from Adele</p>
      </div>
      
      {/* Blog Posts */}
      <div className="space-y-8">
        {posts.map((post, index) => (
          <article 
            key={post.id}
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1 ${
              visiblePosts.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-8">
              {/* Post Meta */}
              <div className="flex items-center gap-3 text-sm mb-4 flex-wrap">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <span className="text-gray-500">{post.date}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-700">by {post.author}</span>
              </div>
              
              {/* Post Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 hover:text-red-600 transition-colors cursor-pointer">
                {post.title}
              </h2>
              
              {/* Post Excerpt */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              {/* Read More Button */}
              <button className="group inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all duration-300">
                Read More
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Decorative line */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="w-12 h-0.5 bg-red-600 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;