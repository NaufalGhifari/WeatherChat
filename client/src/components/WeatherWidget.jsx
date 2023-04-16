import React, {useEffect, useState} from 'react';

function WeatherWidget() {

    console.log("Executing WeatherWidget()");

    const [weatherData, setWeatherData] = useState({});
    useEffect( () => {

        async function getWeatherData(){
            await fetch('/weather').then(
                res => res.json()
            ).then(
                data => setWeatherData(data)
            ).catch(err => console.log(err))
        };
        getWeatherData();

    }, []);

    console.log(weatherData);

    return (
        <div className=' text-centered'>
            <p>+++++++++++++++++++</p>
            
            <p>Current temperature: {weatherData.main.temp}</p>
            <p>Feels like: {weatherData.main.feels_like}</p>
            <p>+++++++++++++++++++</p>
        </div>
    )
};

export default WeatherWidget