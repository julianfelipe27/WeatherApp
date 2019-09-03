import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'
import PropTypes from 'prop-types'
import './styles.css'


const WeatherData= ({data})=>{

    const {temperatura,weather,humedad,viento}=data;
    return (<div className='clase1'>
    <WeatherTemperature temperature={temperatura} weatherState={weather} />
    
    <WeatherExtraInfo  humidity={humedad} wind={viento}/>
    </div>)
}

WeatherData.propTypes= {

    data: PropTypes.shape(
        {
            temperatura: PropTypes.string.isRequired,
            weather: PropTypes.string.isRequired,
            humedad: PropTypes.string.isRequired,
            viento: PropTypes.string.isRequired
        }
    ),
};

export default WeatherData;