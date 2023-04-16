require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');


const app = express();

/* api test call */
app.get('/meal', (req,res) => {
    console.log('Executing \'/meal\'')
    let API_CALL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
    fetch(API_CALL).
    then(res => res.json()).
    then(data =>{
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.status(500).send('Error retrieving meal data.');
    });
});

/* handle weather api stuff */
app.get('/weather', (req, res) =>{

    console.log('inside app.get(/\'weather\')')

    const API_KEY = process.env.OWM_API
    //const lat = 6.2088;
    //const lon = 106.8456;
    //let API_CALL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    const CITY = 'jakarta';
    const LIMIT = 1;
    let GEO_API_CALL = ` http://api.openweathermap.org/geo/1.0/direct?q=${CITY}}&limit=${LIMIT}&appid=${API_KEY}&units=metric`

    async function fetchWeatherData() {
        await fetch(GEO_API_CALL)
        .then(res => res.json())
        .then(data => {
            
            let API_CALL = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${API_KEY}&units=metric`
            fetch(API_CALL)
            .then(res => res.json())
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                console.log(err);
                res.status(500).send('Error retrieving weather data.');
            })
    
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Error retrieving geo-based weather data.');
        })
    };

    /* async function fetchWeatherData() {
        await fetch(GEO_API_CALL)
        .then(res => res.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Error retrieving weather data.');
        })
    }; */

    fetchWeatherData();
    
});



PORT = process.env.SERVER_PORT
app.listen(PORT, () =>{
    console.log(`✅ App is running in port ${PORT}!`)
});

