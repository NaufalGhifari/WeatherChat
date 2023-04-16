import React from 'react';
import './App.css';

/* import components */
import HomeTitle from './components/HomeTitle';
import LoginSignUp from './components/LoginSignUp';
import Comments from './components/Comments';
import WeatherWidget from './components/WeatherWidget';
//import GetMeal from './components/Meal';

function App() {
    return(    
        <div>
            <HomeTitle/>
            <WeatherWidget/>
            <Comments/>
            <LoginSignUp/>
        </div>        
        );
}

export default App;
    
