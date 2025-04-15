import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader.jsx';
import axios from 'axios';

// Helper to get today's date in YYYY-MM-DD format
const getToday = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const Neo = () => {
  const [neoData, setNeoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const today = getToday();
    
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=G0OQ2l9FJHO0zowoHH5nfs1cw7pWChCuUSnLxpNZ`
      )
      .then((res) => {
        setNeoData(res.data.near_earth_objects[today] || []);
        setError(null);
      })
      .catch((err) => {
        setError(
          err.response?.data?.error_message ||
            err.message ||
            'Error fetching data.'
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="text-red-500 text-center mt-10">{error}</div>
    );

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Near-Earth Objects (NEOs)
      </motion.h1>

      <h2 className="text-2xl font-semibold text-center text-indigo-400 mb-4">
        Date: {getToday()}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        {neoData.length === 0 ? (
          <div className="text-center text-xl text-gray-400 col-span-full">
            No NEO data available for today.
          </div>
        ) : (
          neoData.map((neo) => (
            <motion.div
              key={neo.id}
              className="space-y-4 bg-opacity-70 bg-gray-800 p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-center text-indigo-500">
                {neo.name}
              </h3>
              <p className="text-sm text-gray-400 text-center">
                Approach Date:{' '}
                {neo.close_approach_data[0]?.close_approach_date}
              </p>
              <div className="text-gray-200">
                <p>
                  <strong>Miss Distance:</strong>{' '}
                  {neo.close_approach_data[0]?.miss_distance.kilometers} km
                </p>
                <p>
                  <strong>Relative Velocity:</strong>{' '}
                  {neo.close_approach_data[0]?.relative_velocity.kilometers_per_hour} km/h
                </p>
                <p>
                  <strong>Size:</strong>{' '}
                  {neo.estimated_diameter.meters.estimated_diameter_max} meters
                </p>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Neo;
