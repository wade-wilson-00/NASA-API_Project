import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader.jsx';
import axios from 'axios';

const Apod = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=G0OQ2l9FJHO0zowoHH5nfs1cw7pWChCuUSnLxpNZ')
      .then((res) => {
        setApodData(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-center mt-10">Error fetching data.</div>;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        NASA Astronomy Picture of the Day
      </motion.h1>

      <motion.div
        className="max-w-6xl w-full bg-gray-900 p-6 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <div className="w-full flex justify-center">
          {apodData.media_type === 'image' ? (
            <motion.img
              src={apodData.url}
              alt={apodData.title}
              className="rounded-xl w-full max-w-md object-cover"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <div className="text-center">
              <p className="text-lg">Media type is not an image.</p>
              <a href={apodData.url} className="text-blue-400 underline">
                View it here
              </a>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {apodData.title}
          </motion.h2>

          <p className="text-sm text-gray-400">{apodData.date}</p>

          <motion.p
            className="text-md text-gray-200 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {apodData.explanation}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Apod;
