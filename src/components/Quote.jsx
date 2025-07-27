import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy, FaShareAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const gradients = [
  'from-purple-400 via-pink-500 to-red-500',
  'from-green-400 via-blue-500 to-purple-600',
  'from-yellow-400 via-red-500 to-pink-500',
  'from-cyan-500 via-blue-500 to-indigo-500',
  'from-orange-400 via-rose-500 to-pink-600',
  'from-lime-400 via-green-500 to-emerald-500',
  'from-teal-400 via-cyan-500 to-blue-600',
  'from-amber-400 via-orange-500 to-red-600',
  'from-fuchsia-500 via-purple-500 to-violet-600',
  'from-gray-400 via-zinc-500 to-neutral-600',
];

const PAGE_SIZE = 30;

function getRandomGradient() {
  return `bg-gradient-to-br ${gradients[Math.floor(Math.random() * gradients.length)]}`;
}

function dayOfYear(date = new Date()) {
  return Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
}

function getQuoteIndexByDate(total) {
  if (!total) return 0;
  return dayOfYear() % total;
}

async function fetchAllQuotes() {
  const first = await fetch(
    `https://dummyjson.com/quotes?limit=${PAGE_SIZE}&skip=0`
  ).then((r) => r.json());

  const total = first.total ?? first.quotes.length;
  let all = first.quotes;

  for (let skip = all.length; skip < total; skip += PAGE_SIZE) {
    const chunk = await fetch(
      `https://dummyjson.com/quotes?limit=${PAGE_SIZE}&skip=${skip}`
    ).then((r) => r.json());
    all = all.concat(chunk.quotes);
  }

  return all;
}

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [filteredQuotes, setFilteredQuotes] = useState([]);
  const [author, setAuthor] = useState('All');
  const [authorList, setAuthorList] = useState([]);
  const [current, setCurrent] = useState(0);
  const [bgClass, setBgClass] = useState(getRandomGradient());
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const allQuotes = await fetchAllQuotes();
        if (!mounted.current) return;

        setQuotes(allQuotes);
        const uniqueAuthors = ['All', ...new Set(allQuotes.map((q) => q.author))];
        setAuthorList(uniqueAuthors);
        setFilteredQuotes(allQuotes);

        const dailyIndex = getQuoteIndexByDate(allQuotes.length);
        setCurrent(dailyIndex);
        setBgClass(getRandomGradient());
      } catch (err) {
        console.error('Failed to fetch quotes:', err);
      }
    })();
  }, []);

  // Auto switch daily quote at midnight
  useEffect(() => {
    if (!filteredQuotes.length) return;

    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0,
      0
    );
    const msUntilMidnight = midnight - now;

    const t = setTimeout(() => {
      const idx = getQuoteIndexByDate(filteredQuotes.length);
      setCurrent(idx);
      setBgClass(getRandomGradient());
    }, msUntilMidnight);

    return () => clearTimeout(t);
  }, [filteredQuotes.length]);

  // Filter by author
  useEffect(() => {
    if (author === 'All') {
      setFilteredQuotes(quotes);
      setCurrent(getQuoteIndexByDate(quotes.length));
    } else {
      const filtered = quotes.filter((q) => q.author === author);
      setFilteredQuotes(filtered);
      setCurrent(0);
    }
    setBgClass(getRandomGradient());
  }, [author, quotes]);

  const nextQuote = () => {
    if (!filteredQuotes.length) return;
    setCurrent((prev) => (prev + 1) % filteredQuotes.length);
    setBgClass(getRandomGradient());
  };

  const prevQuote = () => {
    if (!filteredQuotes.length) return;
    setCurrent((prev) => (prev - 1 + filteredQuotes.length) % filteredQuotes.length);
    setBgClass(getRandomGradient());
  };

  const handleCopy = () => {
    if (filteredQuotes[current]) {
      navigator.clipboard.writeText(
        `"${filteredQuotes[current].quote}" — ${filteredQuotes[current].author}`
      );
      alert('Quote copied to clipboard!');
    }
  };

  const handleShare = async () => {
    if (!filteredQuotes[current]) return;
    const quoteText = `"${filteredQuotes[current].quote}" — ${filteredQuotes[current].author}`;
    try {
      if (navigator.share) {
        await navigator.share({ text: quoteText });
      } else {
        alert('Sharing not supported on this browser.');
      }
    } catch (err) {
      console.error('Share failed:', err);
    }
  };

  if (!filteredQuotes.length) {
    return (
      <div className="py-12 px-6 text-center w-full rounded-none mt-0 bg-gray-100 text-gray-700">
        Loading quotes...
      </div>
    );
  }

  const q = filteredQuotes[current];

  return (
    <section
    className="scroll-mt-20 py-0 bg-white dark:bg-gray-900 transition-colors duration-500"
    id="quotes"
  >
    {/* Heading */}
    <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white group duration-300 pt-12">
      <span className="relative inline-block">
        Quote of the Day
        <span className="absolute left-0 -bottom-2 h-1 w-0 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
      </span>
    </h2>

    {/* Full-width Gradient Quote Box */}
    <motion.div
      className={`text-white py-12 text-center w-full transition-all duration-500 ${bgClass}`}
    >
      {/* Author Dropdown */}
      <div className="mb-6">
        <select
          className="bg-white/10 hover:bg-white/20 text-white text-sm py-2 px-4 rounded-lg transition duration-300 outline-none focus:outline-none focus:ring-0"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          {authorList.map((name) => (
            <option key={name} value={name} className="text-black">
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Quote + Buttons */}
      <AnimatePresence mode="wait">
        {q && (
          <motion.div
            key={q.id ?? q.quote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <p className="text-xl font-medium italic">"{q.quote}"</p>
            <p className="mt-4 text-sm text-white/90">— {q.author}</p>

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

            <p className="mt-4 text-xs opacity-80">
              {current + 1} / {filteredQuotes.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  </section>
  );
};

export default Quote;
