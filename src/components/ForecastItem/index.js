import React, { Component } from 'react';
import WeatherData from './../WeatherLocation/WeatherData'
import PropTypes from 'prop-types'

class ForecastItem extends Component {

  
    render() {
        const {weekDay}= this.props;
        const {hour}= this.props;
        const {data}= this.props;
        return (
            <div>
               <h2>{weekDay} - {hour}hs</h2>
                <WeatherData data={data}/>
            </div>
        );
    }
}

ForecastItem.propTypes={

    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperatura: PropTypes.string.isRequired,
        weather: PropTypes.string.isRequired,
        humedad: PropTypes.string.isRequired,
        viento: PropTypes.string.isRequired
    })
}
export default ForecastItem;