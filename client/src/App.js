import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

/* import components */
import HomeTitle from './components/HomeTitle';
import LoginSignUp from './components/LoginSignUp';
import Comments from './components/Comments';
import WeatherWidget from './components/WeatherWidget';

function App() {
    return(
            <React.StrictMode>
                
                <HomeTitle/>
                <WeatherWidget/>
                <Comments/>
                <LoginSignUp/>
        
            </React.StrictMode>
        );
}

export default App;
    
