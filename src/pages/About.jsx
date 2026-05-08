import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Stats data
  const authorStats = [
    { icon: "📚", value: "6+", label: "Books Published", color: "red" },
    { icon: "✍️", value: "20+", label: "Years Writing", color: "gray" },
    { icon: "🎤", value: "20+", label: "Events", color: "red" },
    { icon: "❤️", value: "1000+", label: "Happy Readers", color: "gray" }
  ];

  // Timeline data
  const timeline = [
    { year: "2003", event: "Released CD 'From a Whisper to a Touch'" },
    { year: "2012", event: "Graduated with BA in Business, Communication" },
    { year: "2020", event: "Published 'Shadow in the Mirror'" },
    { year: "2024", event: "Released 'The Jigsaw Effect'" }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Book Blogger",
      location: "New York, NY",
      rating: 5,
      quote: "Adele's writing is powerful and moving. 'Shadow in the Mirror' kept me on the edge of my seat from start to finish."
    },
    {
      id: 2,
      name: "Michael Thompson",
      role: "Literary Critic",
      location: "Los Angeles, CA",
      rating: 5,
      quote: "A masterful storyteller who weaves complex characters with intricate plots. A must-read author."
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Book Club Leader",
      location: "Chicago, IL",
      rating: 5,
      quote: "Every book Adele writes is an emotional journey. Her stories stay with you long after the last page."
    }
  ];

  return (
    <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-red-600 text-3xl animate-pulse">📖</span>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
              About The Author
            </span>
          </h1>
          <span className="text-red-600 text-3xl animate-pulse">✍️</span>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Author, Storyteller, Entrepreneur, Dreamer
        </p>
        <div className="w-24 h-0.5 bg-gradient-to-r from-red-600 to-black mx-auto rounded-full mt-4"></div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {authorStats.map((stat, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 text-center border border-red-600/20 hover:border-red-600/40 transition-all duration-300 group">
            <div className={`text-3xl mb-2 text-${stat.color === 'red' ? 'red' : 'gray'}-400 group-hover:scale-110 transition-transform duration-300`}>
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid - Image and Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-28">
        {/* Image Section */}
        <div className="relative mt-10 lg:mt-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-red-600/30">
            <img 
              src="/images/home.png" 
              alt="Adele Hewett Veal" 
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x500?text=Adele+Hewett+Veal';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -z-10 -bottom-6 -right-6 w-3/4 h-3/4 bg-gradient-to-br from-red-600 to-black rounded-2xl opacity-30"></div>
          <div className="absolute -z-10 -top-6 -left-6 w-1/2 h-1/2 bg-gradient-to-tr from-gray-800 to-black rounded-2xl opacity-20"></div>
          
          <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-red-600 to-black rounded-full p-2 shadow-xl">
            <span className="text-white text-xl">✍️</span>
          </div>
        </div>

        {/* Bio Section - Single continuous narrative */}
        <div className="pt-0">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-xl">📚</span>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
              Adele Hewett Veal
            </h2>
            <span className="text-red-600 text-xl">✨</span>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-red-600">Adele Hewett Veal</strong>, a graduate with a BA of Science in Business, specializing in Communication (2012), has nurtured a deep-rooted passion for writing since her childhood. Her early endeavors in crafting short stories, plays, and poetry laid the foundation for her creative journey. In 2003, she embarked on an ambitious project, releasing a CD titled <strong className="text-red-600">"From a Whisper to a Touch, An Inspirational Moment with Adele Hewett,"</strong> where her theatrical poetry, enriched with music and sound effects, captivated audiences with its unique blend of inspiration and artistry.
              </p>
              
              <p>
                Adele's passion for storytelling has been the driving force behind her compelling novels. Her works, including <strong className="text-red-600">"Shadow in the Mirror,"</strong> <strong className="text-red-600">"Reflections from Within,"</strong> and <strong className="text-red-600">"Range of Darkness,"</strong> are testaments to her ability to weave intricate tales that engage and enthrall readers. Each novel is a showcase of her talent in creating vivid, immersive worlds and complex, relatable characters.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-4 my-4">
                <p className="text-gray-800 italic">
                  "Today, Adele is thrilled to introduce her latest masterpiece, <strong className="text-red-600">'The Jigsaw Effect: On The Edge Of Trust.'</strong> This novel, like her previous works, is a testament to her evolution as a writer and her commitment to providing her readers with an exhilarating literary experience."
                </p>
              </div>
              
              <p>
                Adele's aspiration extends beyond the pages; her dream is to see her novels transition from the written word to the silver screen, bringing her stories to life in a new dimension. Her journey as an author is a beacon of inspiration, showing that with passion, dedication, and a touch of creativity, dreams can indeed become reality.
              </p>
              
              <p>
                Join Adele on this exciting literary adventure and be part of the world she creates, one page at a time.
              </p>
              
              <div className="bg-black text-white p-4 rounded-lg mt-4">
                <p className="text-sm leading-relaxed">
                  <strong className="text-red-600">✨ Also Available:</strong> She has also written a captivating nonfiction book, 
                  <strong className="text-red-600"> 'Now, Not Later: Harnessing the Mindset to Transcend Procrastination.'</strong> 
                  This book will help readers unlock their full potential — offering more than just insights, it's a toolkit for transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mt-20 mb-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-red-600 text-2xl">⏰</span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
              Career Timeline
            </h2>
            <span className="text-red-600 text-2xl">📅</span>
          </div>
          <p className="text-gray-600 text-lg">Key moments in Adele's journey</p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-red-600 to-black mx-auto rounded-full mt-3"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 border border-red-600/30 shadow-2xl">
            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.year}</span>
                  </div>
                  <div>
                    <p className="text-gray-300 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-20 mb-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-red-600 text-2xl">⭐</span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
              Reader Love
            </h2>
            <span className="text-red-600 text-2xl">❤️</span>
          </div>
          <p className="text-gray-600 text-lg">What readers are saying about Adele's work</p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-red-600 to-black mx-auto rounded-full mt-3"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 border border-red-600/30 shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-xs text-red-300">{testimonials[activeTestimonial].role}</p>
                  <p className="text-[10px] text-gray-500">{testimonials[activeTestimonial].location}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <span className="absolute -top-2 -left-2 text-red-600/20 text-3xl">"</span>
              <p className="text-gray-300 leading-relaxed pl-6">
                "{testimonials[activeTestimonial].quote}"
              </p>
            </div>
            
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeTestimonial === index 
                      ? 'w-8 h-2 bg-red-600' 
                      : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {testimonials.slice(1, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-900/40 rounded-xl p-4 border border-red-600/20 hover:border-red-600/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-[9px] text-red-300">{testimonial.role}</p>
                </div>
                <div className="flex gap-0.5 ml-auto">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-[10px]">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Message Banner */}
      <div className="mt-16 bg-gradient-to-r from-red-900/30 via-black/30 to-gray-900/30 rounded-2xl p-6 text-center border border-red-600/20">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-red-400 text-xl">✨</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-black font-semibold text-lg">A Message from Adele</span>
          <span className="text-red-400 text-xl animate-pulse">❤️</span>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
          "Join me on this exciting literary adventure and be part of the world I create, one page at a time. 
          Through my writing, I hope to inspire, challenge, and entertain. Every story is a journey, and I'm grateful 
          to have you along for the ride."
        </p>
        <div className="flex justify-center gap-1 mt-4">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
        </div>
      </div>
    </div>
  );
};

export default About;