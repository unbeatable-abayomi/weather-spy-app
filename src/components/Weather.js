import React from 'react';

const Weather = (props) => {
	return (
		<div className="weather__info">
			<h1>Weather Report</h1>

			{props.city &&
			props.country && (
				<p className="weather_key">
					Location : {props.city},{props.country}
				</p>
			)}
			{props.temperature && <p className="weather_key"> Temperature : {props.temperature}&#8451; </p>}
			{props.weatherIcon && <img src={props.weatherIcon} width="40px" alt="Icon" />}
			{props.humidity && <p className="weather_key"> Humidity: {props.humidity}&#37;</p>}
			{props.description && <p className="weather_key"> Condition : {props.description}</p>}
			{props.error && <p className="weather_key">{props.error} </p>}
		</div>
	);
};

export default Weather;
