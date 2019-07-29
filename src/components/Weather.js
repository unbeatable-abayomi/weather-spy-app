import React from 'react';

const Weather =(props)=>{
 
        return (
            <div className="weather__info">
            <h1>Weather Report</h1>
              
            {props.city && props.country && <p className="weather_key">Loation : {props.city},{props.country}</p>} 
             {props.temperature && <p className="weather_key"> Temapture : {props.temperature}</p>} 
             {props.humidity && <p className="weather_key"> Humidity: {props.humidity}</p>} 
            {props.description && <p className="weather_key"> Condition : {props.description}</p>} 
               {props.error && <p className="weather_key" >{props.error} </p>} 
           
           
            </div>
        )
    
}

export default Weather;