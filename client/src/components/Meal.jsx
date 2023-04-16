import React, {useState, useEffect} from 'react';

function GetMeal(){

    const [mealData, setMealData] = useState([{}]);

    useEffect( () => {
        fetch('/meal')
        .then(res => res.json())
        .then(data => setMealData(data))
        .catch(err => {console.log(err)});
    }, []);

    console.log(mealData)

    return(
        <div>
            {(typeof mealData === 'undefined') ? (
                <p>Loading meal...</p>
            ) : (<p>Meal is loaded.</p>)}
        </div>
    );
};

export default GetMeal