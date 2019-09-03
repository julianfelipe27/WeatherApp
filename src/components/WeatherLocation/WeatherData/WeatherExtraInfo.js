import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const WeatherExtraInfo= ({humidity,wind})=>(

    <div className='clase2'>
    <span className='humedad'>{`Humedad: ${humidity}%`}</span>
    <span className='viento'>{`Viento: ${wind}m/s`}</span>
    </div>
)

WeatherExtraInfo.propTypes={

    humidity: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;