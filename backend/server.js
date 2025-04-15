const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');
const nasaRoutes = require('./routes/nasa');

const app = express();
dotenv.config();
const port = process.env.PORT || 5173;

// Middleware 
app.use(cors());

// Root route
app.get('/', (req, res) => {
    console.log('Root route accessed');
    res.send('Welcome to the NASA API Project!');
});

// Mount NASA API routes
app.use('/api/', nasaRoutes);

// Test route
app.get('/api', (req, res) => {
    res.send('NASA API ran successfully');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

