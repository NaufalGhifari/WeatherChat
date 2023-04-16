import React, {useEffect, useState} from 'react';

function WeatherWidget() {

    console.log("Executing WeatherWidget()");

    const [weatherData, setWeatherData] = useState({});
    useEffect( () => {
            fetch('/weather')
            .then(res => res.json())
            .then(data => {setWeatherData(data)})
            .catch(err => console.log(err))
    }, []);

    console.log(weatherData);

    return (
        <div className='weather-widget-card'>

            <h2>Jakarta, Indonesia</h2>

            {(typeof weatherData.main === 'undefined') ? (
                <h3>Loading weather data...</h3>
            ) : (
                <div>
                    <h1 className='big-temp-text animated-gradient-warm'>{weatherData.main.temp} C</h1>
                    <h2>Feels like: {weatherData.main.feels_like} C</h2>
                </div>
                
            )}
        </div>
    )
};

export default WeatherWidget