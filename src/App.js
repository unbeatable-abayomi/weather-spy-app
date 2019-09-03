import React from 'react';
import Title from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
// eslint-disable-next-line
// eslint-disable-next-line
import rain from './forecast/moon.svg';
import sun from './forecast/forecast.svg';
import cool from './forecast/rain.svg';

const API_KEY = 'e43c60c1d74b3bccd1b3654eb8db80bd';

class App extends React.Component {
	state = {
		temperature : undefined,
		city        : undefined,
		country     : undefined,
		humidity    : undefined,
		description : undefined,
		image       : undefined,
		error       : undefined
	};

	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(
			`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
		);
		// const api_call = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=kano,nigeria&appid=e43c60c1d74b3bccd1b3654eb8db80bd&units=metric`);
		const data = await api_call.json();
		if (city && country) {
			console.log(data);
			if (data.main.temp < 15) {
				this.setState({ image: cool });
			}
			else if (data.main.temp === 20) {
				this.setState({ image: rain });
			}
			else if (data.main.temp > 20) {
				this.setState({ image: sun });
			}
			this.setState({
				temperature : data.main.temp,
				city        : data.name,
				country     : data.sys.country,
				humidity    : data.main.humidity,
				description : data.weather[0].description,
				error       : ''
			});
		}
		else {
			this.setState({
				temperature : undefined,
				city        : undefined,
				country     : undefined,
				humidity    : undefined,
				description : undefined,
				error       : "Pls do enter values in the input Box's above"
			});
		}
	};
	render() {
		return (
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="container">
							<div className="row">
								<div className="col-sm-6 title-container">
									<Title />
								</div>
								<div className="col-sm-6 form-container">
									<Form getWeather={this.getWeather} />
									<Weather
										weatherIcon={this.state.image}
										temperature={this.state.temperature}
										city={this.state.city}
										country={this.state.country}
										humidity={this.state.humidity}
										description={this.state.description}
										error={this.state.error}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
