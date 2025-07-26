import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy, FaShareAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const gradients = [
  'from-purple-400 via-pink-500 to-red-500',
  'from-green-400 via-blue-500 to-purple-600',
  'from-yellow-400 via-red-500 to-pink-500',
  'from-cyan-500 via-blue-500 to-indigo-500',
  'from-orange-400 via-rose-500 to-pink-600',
];

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [current, setCurrent] = useState(0);
  const [bgClass, setBgClass] = useState(getRandomGradient());

  function getRandomGradient() {
    return `bg-gradient-to-br ${gradients[Math.floor(Math.random() * gradients.length)]}`;
  }

  // Fetch all quotes once
  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
        setBgClass(getRandomGradient());
      })
      .catch((err) => console.error('Failed to fetch quotes:', err));
  }, []);

  const nextQuote = () => {
    setCurrent((prev) => (prev + 1) % quotes.length);
    setBgClass(getRandomGradient());
  };

  const prevQuote = () => {
    setCurrent((prev) => (prev - 1 + quotes.length) % quotes.length);
    setBgClass(getRandomGradient());
  };

  const handleCopy = () => {
    if (quotes[current]) {
      navigator.clipboard.writeText(`"${quotes[current].quote}" — ${quotes[current].author}`);
      alert("Quote copied to clipboard!");
    }
  };

  const handleShare = async () => {
    const quoteText = `"${quotes[current].quote}" — ${quotes[current].author}`;
    try {
      if (navigator.share) {
        await navigator.share({ text: quoteText });
      } else {
        alert("Sharing not supported on this browser.");
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  return (
    <motion.div
      className={`text-white py-12 px-6 text-center w-full rounded-none mt-12 transition-all duration-500 ${bgClass}`}
      whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.25)' }}
    >
      <AnimatePresence mode="wait">
        {quotes.length > 0 && (
          <motion.div
            key={quotes[current].quote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <p className="text-xl font-medium italic">"{quotes[current].quote}"</p>
            <p className="mt-4 text-sm text-white/90">— {quotes[current].author}</p>

            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <button
                onClick={prevQuote}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm py-2 px-4 rounded-lg transition duration-300"
              >
                <FaChevronLeft /> Prev
              </button>
              <button
                onClick={nextQuote}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm py-2 px-4 rounded-lg transition duration-300"
              >
                Next <FaChevronRight />
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm py-2 px-4 rounded-lg transition duration-300"
              >
                <FaCopy /> Copy
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm py-2 px-4 rounded-lg transition duration-300"
              >
                <FaShareAlt /> Share
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Quote;
