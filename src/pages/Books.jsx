import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Books = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const books = [
    {
      id: 1,
      title: "Beyond the Storm's Reach",
      subtitle: "A story of betrayal, survival, and the unexpected power of love",
      year: "2024",
      genre: "Romance / Drama",
      image: "/images/beyond.png",
      fullDescription: `When Grace's husband shatters their vows with one confession—he's having a child with another woman—her world tilts off its axis. Lost and heartbroken, she boards a luxury cruise with her best friend Zoe, desperate for escape. But when a violent storm sends the ship to the ocean floor, escape takes on a whole new meaning.

Stranded on a remote island with a handful of survivors, Grace must fight for more than survival—she must fight for herself. Among the castaways is Ross, a bestselling author with secrets of his own. In the wreckage of their old lives, Grace finds something unexpected: a love that feels like destiny. But when rescue comes, so does a choice—return to the life she knew or risk everything for the man who helped her find the courage to live again.

The storm was only the beginning. A breathtaking novel of love, loss, and the resilience of the human heart.`
    },
    {
      id: 2,
      title: "Shadow in the Mirror",
      subtitle: "A story of love, forgiveness, and finding yourself",
      year: "2020",
      genre: "Psychological Thriller",
      image: "/images/shadow.png",
      fullDescription: `Leslee Cramer suffers from multiple personality disorder, the result of childhood abuse. Because of this illness, she has been known to find herself suddenly in strange places with no understanding of how she got there, having lost time along the way. But when she wakes up in a strange bed with a strange man who claims to be her husband, she knows something drastic has changed.

It turns out that Lee—Leslee's alter ego—has been in control for ten years. During that time, she married and had two children, only to have her escapades terrify the kids and alienate her husband, Kevin. Les, at sea in a life she doesn't recognize, turns to her longtime friend, Veronica Moore, and her doctor, Alex Whitfield, for help. Along with her doctor, Alex Whitfield, Veronica is one of the few people who are aware of Les' disorder. With their help Les must find the strength to hold onto her true identity and to recover the family that she is on the brink of losing.

Shadow in the Mirror reaches beneath the surface of one woman's life and peers into the mirrored image of her soul to tell a story of love and forgiveness.`
    },
    {
      id: 3,
      title: "The Jigsaw Effect",
      subtitle: "On The Edge of Trust",
      year: "2024",
      genre: "Suspense / Thriller",
      image: "/images/jigsaw.png",
      fullDescription: `In the dimly lit streets of San Diego, private investigator Ryan Parrish finds herself ensnared in a deadly game. Chased by the relentless Jake Williamson, a figure from her past, Ryan is entangled in a dangerous web of events over a military chip laden with explosive national secrets. As danger interrupts her once safe haven, not only is her life at stake, but also those she holds dear.

In a twist of fate, Ryan seeks help from an old flame, reigniting a fiery, unresolved conflict and a smoldering romance. As they navigate through a maze of old wounds and new dangers, they must reconcile their tumultuous history.

Will their reignited bond be strong enough to shield them from Jake's threats? Get ready to be swept away in a riveting saga filled with suspense, passion, and twists that will leave you gasping until the last page.`
    },
    {
      id: 4,
      title: "Range Of Darkness",
      subtitle: "A psychological thriller that will keep you guessing",
      year: "2022",
      genre: "Psychological Thriller",
      image: "/images/range.png",
      fullDescription: `A simple butterfly necklace uncovers secrets from the grave so astonishing that Gee Haynes has to admit, fate doesn't play by anybody's rule. In Adele Hewett Veal's latest novel, Range Of Darkness, Gee Haynes finds herself back in San Diego to work her last case before moving to Gilbert, AZ to marry the man of her dreams, Keith Jenison.

It's not long before Gee realizes she's working more than one case. One that almost cost her her life and the other that alters her future. Range Of Darkness is more than just another psychological thriller, it's an unpredictable rollercoaster ride that will stay with you long after the last page has been turned.`
    },
    {
      id: 5,
      title: "Reflections from Within",
      subtitle: "A breathtaking story of identity and love",
      year: "2021",
      genre: "Psychological Romance",
      image: "/images/reflection.png",
      fullDescription: `When do you tell the man you love that you suffer from an incurable identity disorder? When is it the right time to have that type of conversation?

Multiple Personality Disorder is real and like her mother, Leslee Cramer, in the novel Shadow in The Mirror, Kelly has learned to manage hers – until now.

Kelly Jenison is a third-year college student at UCLA. In March of 2014, Kelly mysteriously disappears. And just as mystifying, she turns up a year later, beaten and stabbed at Mercy Hospital as a Jane Doe.

Get ready for a breathtaking story that will take you on a romantic binge. The twists and turns of Kelly's consciousness will leave you clutching your heart and wondering – Will she be lured away by Daniel or swept away by Pen?`
    },
    {
      id: 6,
      title: "Now, Not Later",
      subtitle: "Harnessing the Mindset to Transcend Procrastination",
      year: "2023",
      genre: "Nonfiction / Self-Help",
      image: "/images/not-now.png",
      fullDescription: `In an era where productivity and personal development are at the forefront of the cultural zeitgeist, "Now, Not Later" emerges as a groundbreaking work, a call to action, blending motivational insights with practical wisdom.

"Transformative," "empowering," and "revolutionary" – these are the words that encapsulate the essence of "Now, Not Later." Adele Hewett Veal centers each chapter around a potent, thought-provoking quote ending in "get up and move," which serves as a catalyst for change.

It's a masterful blend of narrative and motivation, designed to resonate with anyone who's ever felt the grip of procrastination. This book is a beacon for the modern reader: dynamic, impactful, and deeply relatable. "Actionable," "inspirational," and "life-changing" – these are not just buzzwords, they're promises that "Now, Not Later" delivers on.`
    }
  ];

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
    document.body.style.overflow = 'auto';
  };

  // Prevent closing when clicking modal content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Back to Home Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all duration-300 group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">My</span>
            <span className="text-red-600"> Books</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg">Explore my collection of novels and nonfiction works</p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={book.id}
              className={`group cursor-pointer transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openModal(book)}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Book Cover Image */}
                <div className="h-80 overflow-hidden bg-gray-100">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300x400?text=Book+Cover';
                    }}
                  />
                </div>
                
                {/* Book Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-black group-hover:text-red-600 transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                    <span className="text-sm text-gray-500 ml-2 flex-shrink-0">{book.year}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 italic line-clamp-2">{book.subtitle}</p>
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                    {book.genre}
                  </span>
                  <div className="mt-4 flex items-center text-red-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Rendered outside the main div for proper positioning */}
      {isModalOpen && selectedBook && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={handleModalContentClick}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Modal Image Side */}
              <div className="md:w-2/5 bg-gray-100 p-6 flex items-center justify-center">
                <img 
                  src={selectedBook.image} 
                  alt={selectedBook.title}
                  className="w-full max-w-[200px] md:max-w-full object-contain rounded-lg shadow-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x400?text=Book+Cover';
                  }}
                />
              </div>
              
              {/* Modal Content Side */}
              <div className="md:w-3/5 flex flex-col">
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-black">{selectedBook.title}</h2>
                      <p className="text-gray-600 text-sm italic mt-1">{selectedBook.subtitle}</p>
                      <div className="flex gap-2 mt-3">
                        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">{selectedBook.year}</span>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{selectedBook.genre}</span>
                      </div>
                    </div>
                    <button 
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-600 transition-colors text-3xl leading-none"
                    >
                      ×
                    </button>
                  </div>
                </div>
                
                {/* Modal Body with Scroll */}
                <div className="p-6 overflow-y-auto flex-1">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedBook.fullDescription}
                  </p>
                </div>
                
                {/* Modal Footer */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <button
                    onClick={closeModal}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Books;