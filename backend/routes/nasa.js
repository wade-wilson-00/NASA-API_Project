const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const nasaApiKey = process.env.NASA_API_KEY;
const router = express.Router();

router.get('/neo', async (req, res) => {
    if (!nasaApiKey) {
        console.error('NASA_API_KEY is not defined in the environment variables.');
        return res.status(500).json({ error: 'NASA API key is missing' });
    }

    try {
        console.log('Fetching data from NASA API...');
        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${nasaApiKey}`);
        console.log('NASA API response:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from NASA API:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/apod', async (req, res) => {

    try {
        console.log('Fetching APOD data from NASA ....');
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`);
        console.log('NASA APOD response:', response.data);
        res.json(response.data);
    } catch(error) {
        console.error('Error fetching APOD data from NASA', error.message);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

router.get('/insight_weather', async (req, res) => {
    
    try {
        console.log('Fetching the Mars Weather Data from NASA .....');
        
        const response = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${nasaApiKey}&feedtype=json&ver=1.0`);
        console.log("Mars Weather Response", response.data);
        res.json(response.data);

    } catch(error) {
        console.error('Error fetching the Mars Weather Data from NASA', error.message);
        res.status(500).json({ error: 'Internal Server Error'});
    }
})

module.exports = router;
