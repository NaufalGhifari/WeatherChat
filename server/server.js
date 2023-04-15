require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();

/* handle weather api stuff */
app.get('/weather', (req, res) =>{

    console.log('inside app.get(/\'weather\')')

    const API_KEY = '2b72ea9fe4a01260fc38182de45220c5';
    const lat = 44.34;
    const lon = 10.99;

    //API_CALL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    API_CALL = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=2b72ea9fe4a01260fc38182de45220c5'

    fetch(API_CALL)
    .then(res => res.json())
    .then(data => {
        console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        console.log(data)
        res.send(data);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('Error retrieving weather data.');
    })
});

PORT = process.env.SERVER_PORT
app.listen(PORT, () =>{
    console.log(`✅ App is running in port ${PORT}!`)
});

