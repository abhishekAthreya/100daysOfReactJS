import React, { Component } from 'react';
import WeatherIcon from './WeatherIcon';

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 1,
            icon: '',
            location: '',
            temp: "",
            weather_code: ""
        }
    }

    fetchWeatherInfo = (city) =>{
        const baseUrl = `http://api.openweathermap.org`;
        const path = `/data/2.5/weather`;
        const appId = `1fbaf6e0d29ea877ae5852504eef4e82`;
        const query = `units=metric&appid=${appId}`;
        fetch(`${baseUrl}${path}?q=${city}&${query}`)
        .then((response)=>{
            return response.json()})
        .then((data)=>{
            var date = new Date();
            var time = date.getHours();
            this.setState({time:time,
            temp:Math.round(data.main.temp),
            location:city,
            weather_code:data.weather[0].id
            })
        })
        .catch((error)=>{
            console.log("LOL");
            console.log(error)
        });
    }

    fetchIP = () => {
        fetch('http://ip-api.com/json').then((response) => response.json()).then((data) => {
            this.fetchWeatherInfo(data.city)
        }).catch((error) => {
            console.log(this.fetchWeatherInfo("Bengaluru"));
        })
    }

    componentDidMount = () => {
        this.fetchIP();
    }
    render() {
        return (
            <div className="Icon" data-hour={this.state.time}>
        <div className="Sky"></div>
        <WeatherIcon src={this.state.icon} weatherCode={this.state.weather_code} timeOfDay={this.state.time}/>
        <div className="Information">
          <div className="Location">{this.state.location}</div>
          <div className="Temperature">{this.state.temp} &deg; C</div>  
        </div>
      </div>
        );
    }
}

export default Icon;