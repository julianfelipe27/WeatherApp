import React from 'react'
import WeatherIcons from 'react-weathericons'
import {RAINY, SUNNY, SNOWING, CLOUDY, DRIZZLE, WINDY, THUNDER} from '../../../constants/weathers'
import PropTypes from 'prop-types'
import './styles.css'

const getWeather = weatherState=>{

    if(weatherState===RAINY){
        return 'umbrella'
    }

    else if(weatherState===SUNNY){
        return 'day-sunny'
    }

    else if(weatherState===SNOWING){
        return 'snow'
    }

    else if(weatherState===DRIZZLE){
        return 'day-showers'
    }

   else if(weatherState===THUNDER){
        return 'day-thunderstorm'    
    }

    else if(weatherState===CLOUDY){
        return 'cloudy'
    }

    else if(weatherState===WINDY){
        return 'windy'
    }
    else{

        return 'umbrella'
    }

}

const getWeatherIcon= weatherState=> {

    return <WeatherIcons className='icon' name={getWeather(weatherState)} size='4x'/>
}

const WeatherTemperature = ({temperature, weatherState})=>(

    <div className='clase3'> 

    {getWeatherIcon(weatherState)}         
    <span className='temperatura'>{`${temperature}`}</span>
    <span className='centigrados'>°C</span>
    </div>
)

WeatherTemperature.propTypes={
    temperature: PropTypes.string.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;