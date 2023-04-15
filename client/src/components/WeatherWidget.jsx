import React, {useEffect, useState} from 'react';

function WeatherWidget() {

    console.log("Executing WeatherWidget()");

    const [weatherData, setWeatherData] = useState([]);
    useEffect( () => {
        fetch('/weather')
        .then(res => res.json())
        .then(weatherData => setWeatherData(weatherData))
        .catch(err => console.log(err));
    }, []);

    console.log(weatherData);

    if (!weatherData){
        return(<p>Loading weather...</p>)
    }

    return (
        <div className=' text-centered'>
            <p>+++++++++++++++++++</p>
            <h2>Weather widget goes here</h2>
            <p>{weatherData}</p>
            <p>+++++++++++++++++++</p>
        </div>
    )
};

export default WeatherWidget