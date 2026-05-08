import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const books = [
    { title: "Shadow in the Mirror", year: "2020" },
    { title: "Reflections from Within", year: "2021" },
    { title: "Range of Darkness", year: "2022" },
    { title: "The Jigsaw Effect: On The Edge Of Trust", year: "2024" }
  ];

  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-black">About the</span>
          <span className="text-red-600"> Author</span>
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        <p className="text-gray-600 mt-4 text-lg">Author, Storyteller, Dreamer</p>
      </div>
      
      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
        <div className="flex flex-col lg:flex-row">
          {/* Image Side - Left aligned */}
          <div className="lg:w-1/3 bg-gradient-to-br from-black to-gray-800 p-8">
            <div className="lg:sticky lg:top-24">
              <img 
                src="/images/adele.jpg" 
                alt="Adele Hewett Veal"
                className="w-64 h-64 object-cover rounded-full mx-auto lg:mx-0 mb-4 border-4 border-red-600 shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/256x256?text=Adele+Hewett+Veal';
                }}
              />
              <div className="w-16 h-0.5 bg-red-600 mx-auto lg:mx-0 my-4"></div>
              <p className="text-white/80 text-sm text-center lg:text-left">BA of Science in Business</p>
              <p className="text-white/60 text-xs text-center lg:text-left">Specializing in Communication, 2012</p>
            </div>
          </div>
          
          {/* Bio Side */}
          <div className="lg:w-2/3 p-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong className="text-red-600">Adele Hewett Veal</strong>, a graduate with a BA of Science in Business, specializing in Communication (2012), has nurtured a deep-rooted passion for writing since her childhood. Her early endeavors in crafting short stories, plays, and poetry laid the foundation for her creative journey. In 2003, she embarked on an ambitious project, releasing a CD titled <strong className="text-red-600">"From a Whisper to a Touch, An Inspirational Moment with Adele Hewett,"</strong> where her theatrical poetry, enriched with music and sound effects, captivated audiences with its unique blend of inspiration and artistry.
            </p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Adele's passion for storytelling has been the driving force behind her compelling novels. Her works, including <strong className="text-red-600">"Shadow in the Mirror,"</strong> <strong className="text-red-600">"Reflections from Within,"</strong> and <strong className="text-red-600">"Range of Darkness,"</strong> are testaments to her ability to weave intricate tales that engage and enthrall readers. Each novel is a showcase of her talent in creating vivid, immersive worlds and complex, relatable characters.
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-4 my-6">
              <p className="text-gray-800 italic">
                "Today, Adele is thrilled to introduce her latest masterpiece, <strong className="text-red-600">'The Jigsaw Effect: On The Edge Of Trust.'</strong> This novel, like her previous works, is a testament to her evolution as a writer and her commitment to providing her readers with an exhilarating literary experience."
              </p>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Adele's aspiration extends beyond the pages; her dream is to see her novels transition from the written word to the silver screen, bringing her stories to life in a new dimension. Her journey as an author is a beacon of inspiration, showing that with passion, dedication, and a touch of creativity, dreams can indeed become reality.
            </p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Join Adele on this exciting literary adventure and be part of the world she creates, one page at a time.
            </p>
            
            <div className="bg-black text-white p-4 rounded-lg mt-4">
              <p className="text-sm leading-relaxed">
                <strong className="text-red-600">✨ Also Available:</strong> She has also written a captivating nonfiction book, 
                <strong className="text-red-600"> 'Now, Not Later: Harnessing the Mindset to Transcend Procrastination.'</strong> 
                This book will help readers unlock their full potential — offering more than just insights, it's a toolkit for transformation.
              </p>
            </div>
            
            {/* Book List */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-bold text-black mb-3">Published Works</h3>
              <div className="flex flex-wrap gap-2">
                {books.map((book, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                    {book.title} ({book.year})
                  </span>
                ))}
              </div>
            </div>
            
            {/* Signature line */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-red-600 font-serif italic text-right">— Adele Hewett Veal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;