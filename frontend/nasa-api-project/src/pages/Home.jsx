import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="relative bg-gray-900 text-white min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-home.gif')" }}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pb-12 pt-10">
        <motion.div className="flex flex-col items-center justify-center text-center h-screen px-4">
          <motion.h1 
            className="text-5xl font-bold mb-4 text-white"
            initial={{ y: -50 }} 
            animate={{ y: 0 }} 
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            🚀 NASA Data Dashboard
          </motion.h1>

          <motion.p 
            className="text-lg text-gray-300 mb-6 max-w-xl"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          >
            Welcome to the universe of data! 🌌<br />
            Explore the stunning Astronomy Pictures of the Day provided by NASA, Mars Planet Weather Data, and <br /> the objects that are currently near the earth. 🌍✨
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          >
            {/* APOD Button */}
            <button
              onClick={() => navigate('/apod')}
              className="relative px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-yellow-500 hover:border-yellow-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(245,158,11,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(245,158,11,0.4)] group"
            >
              <span className="flex items-center space-x-2">
                <span>APOD</span>
              </span>
              <span
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20"
              ></span>
            </button>

            {/* Mars Weather Button */}
            <button
              onClick={() => navigate('/mars')}
              className="relative px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(59,130,246,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(59,130,246,0.4)] group"
            >
              <span className="flex items-center space-x-2">
                <span>Mars Weather</span>
              </span>
              <span
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/20 to-blue-400/20"
              ></span>
            </button>

            {/* NEO Data Button */}
            <button
              onClick={() => navigate('/neo')}
              className="relative px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-red-500 hover:border-red-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(239,68,68,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(239,68,68,0.4)] group"
            >
              <span className="flex items-center space-x-2">
                <span>NEO Data</span>
              </span>
              <span
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-red-500/20 to-red-400/20"
              ></span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
