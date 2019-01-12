import React from 'react';

const WeatherIcon = props => {
    let timeOfDay = 
      (props.timeOfDay > 7 && props.timeOfDay < 18) 
      ? 'day' : 'night';
    let className = 'WeatherIcon wi ' 
    className += 'wi-owm-'+timeOfDay+'-'+props.weatherCode;
    return (<i className={className}></i>);
};

export default WeatherIcon;