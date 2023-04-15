require('dotenv').config();
const express = require('express');

const app = express();

/* handle weather api stuff */
app.get('/api/weather/', (req, res) =>{
    let lat = 44.34;
    let lon = 10.99;

    // if you need to change the lat and lon, change it here

    API_CALL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    axios.get(API_CALL).then( response => {
        res.send(response.data);
    }).catch(error => {
        console.error(error);
        res.status(500).send('❌Error fetching weather data');
    });
});

PORT = process.env.SERVER_PORT
app.listen(PORT, () =>{
    console.log(`✅ App is running in port ${PORT}!`)
});

