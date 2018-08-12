import React, { Component } from 'react';
import './App.css';
import oaklandWeather from './oaklandweather.json';

class App extends Component {
  state = {
    description: 'Hit refresh...',
  }

  onRefresh = () => {
    let location = this.state.searchBox;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0de82b6b4ba5d843dac44bbee4d02543`
    console.info("refreshed");
    let theWeather;
    fetch(url).then(response => response.json())
    .then(data => theWeather = data)
    .then(() => {
      if(!theWeather.main){
        console.error("Invalid location");
        this.setState({
          location: "No such place.."
        });
        return;
      }
      this.setState({
        searchBox: location,
        location: theWeather.name,
        temperature: Math.round(theWeather.main.temp - 273),
        description: theWeather.weather[0].main,
        windSpeed: Math.round(theWeather.wind.speed),
        humidity: Math.round(theWeather.main.humidity),
        pressure: Math.round(theWeather.main.pressure),
      })
      console.log(theWeather);
    })
    .catch(error => {
      console.error(error);
    })

  }

onSearchBoxChange = (event) => {
    this.setState({
      searchBox: event.target.value,
    })
}
  render() {

    // Guess what type of weather this is so we can use the
    // appropriate class to style the background conditionally based
    // on the weather that we have
    const appClasses = ['App'];
    const desc = this.state.description.toLowerCase();
    if (desc.includes('clear')) {
      appClasses.push('App--clear');
    } else if (desc.includes('cloud')) {
      appClasses.push('App--cloud');
    } else if (desc.includes('storm')) {
      appClasses.push('App--storm');
    } else if (desc.includes('rain')) {
      appClasses.push('App--rain');
    }

    return (
      <div className={appClasses.join(' ')}>
        <div className="WeatherDashboard">
          <div className="WeatherDashboard-location">
            {this.state.location}
          </div>
          <div className="WeatherDashboard-overview">
            <span className="WeatherDashboard-temperature">
              {this.state.temperature}° <span>C</span>
            </span>
            <div className="WeatherDashboard-description">{this.state.description}</div>
          </div>
          <div className="WeatherDashboard-details">
            <div className="WeatherDashboard-label">Wind</div>
            <div className="WeatherDashboard-data">{this.state.windSpeed} <span>km/h</span></div>
            <div className="WeatherDashboard-label">Humidity</div>
            <div className="WeatherDashboard-data">{this.state.humidity} <span>%</span></div>
            <div className="WeatherDashboard-label">Pressure</div>
            <div className="WeatherDashboard-data">{this.state.pressure}</div>
          </div>
          <div className="Controls">

              <input id="searchBox" placeholder="Enter location name"
                value={this.state.searchBox}
                onChange={this.onSearchBoxChange}
                />

            <button
              onClick={this.onRefresh}>Refresh</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
