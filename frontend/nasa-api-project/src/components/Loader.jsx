import React from 'react';
import { motion } from 'framer-motion';
import './stars.css';

const Loader = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* 🌠 Star Background */}
      <div className="stars"></div>
      <div className="stars stars2"></div>
      <div className="stars stars3"></div>

      {/* 🌌 Galaxy Arms */}
      <motion.div
        className="w-72 h-72 border-[12px] border-t-indigo-600 border-r-transparent border-b-transparent border-l-purple-600 rounded-full absolute blur-sm opacity-50"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
      />
      <motion.div
        className="w-56 h-56 border-[10px] border-t-pink-400 border-r-transparent border-b-transparent border-l-blue-400 rounded-full absolute blur-sm opacity-40"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      />

      {/* 🌍 Planet Core */}
      <motion.div
        className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-800 shadow-[0_0_60px_15px_rgba(80,0,200,0.6)] z-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />

      {/* 🛰️ Orbiting Satellites */}
      <motion.div
        className="absolute w-2 h-2 bg-yellow-400 rounded-full top-1/2 left-1/2"
        style={{ marginLeft: '-1px', marginTop: '-90px' }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
      >
        <div className="w-2 h-2 bg-yellow-400 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute w-2 h-2 bg-black rounded-full top-1/2 left-1/2"
        style={{ marginLeft: '70px', marginTop: '-1px' }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>

      {/* 🌌 Loading Text */}
      <p className="text-white mt-12 text-lg tracking-wide animate-pulse z-10">
        Navigating the Cosmos...
      </p>
    </div>
  );
};

export default Loader;