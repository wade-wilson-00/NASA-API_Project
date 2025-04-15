import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader.jsx';
import axios from 'axios';

const MarsWeather = () => {
  const [marsData, setMarsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        'https://api.nasa.gov/insight_weather/?api_key=G0OQ2l9FJHO0zowoHH5nfs1cw7pWChCuUSnLxpNZ&feedtype=json&ver=1.0'
      )
      .then((res) => {
        setMarsData(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(
          err.response?.data?.error_message ||
            err.message ||
            'Error fetching Mars weather data.'
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

  const solKeys = marsData?.sol_keys || [];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mars Weather Data
      </motion.h1>

      {/* Disclaimer */}
      <motion.div
        className="bg-black p-4 rounded-md shadow-lg mb-6 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p >
          Disclaimer :<br />NASA's InSight Mars lander mission ended in December
          2022. The Mars Weather API only provides weather data for the last
          available Sols (Martian days)<br />before the mission's conclusion. It is
          not possible to fetch real-time data or data aligned with the current
          Earth date.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {solKeys.length === 0 ? (
          <div className="text-center text-xl text-gray-400">
            No Mars weather data available.
          </div>
        ) : (
          solKeys.map((solKey) => {
            const solData = marsData[solKey];

            return (
              <motion.div
                className="space-y-4 max-w-sm bg-opacity-70 bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col gap-4"
                key={solKey}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-semibold text-center text-indigo-400">
                  Sol {solKey}
                </h2>
                <p className="text-sm text-gray-400 text-center">
                  Date: {solData?.Last_UTC}
                </p>

                <div className="flex flex-col gap-4">
                  {/* Weather Info */}
                  <div className="flex flex-row justify-between text-md text-gray-200">
                    <div>
                      <p>
                        <strong>Temperature:</strong> {solData?.AT?.av} °C
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Wind Speed:</strong> {solData?.HWS?.av} m/s
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between text-md text-gray-200">
                    <div>
                      <p>
                        <strong>Pressure:</strong> {solData?.PRE?.av} Pa
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </motion.div>
    </div>
  );
};

export default MarsWeather;
