import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransformForecast from './../../services/TransformForecast'
import ForecastItem from './../ForecastItem'
import './styles.css'

const app_id='4370603965ef765c39994f0e18348bcc';

class ForecastExtended extends Component {

    constructor(props){
        super(props)
   
        this.state={

            forecastData: null
        }
    }

    componentDidMount() {
        
       this.updateCity(this.props.city)
    }

    
    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({
                forecastData:null
            })    
            this.updateCity(nextProps.city)
        }
    }
    
    
    updateCity(city){

        const url=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${app_id}`

        fetch(url).then(data=>(data.json())).then(weather_data=>{

            console.log(weather_data)
            const forecastData= TransformForecast(weather_data)
            console.log(forecastData)
            this.setState({forecastData})
          }
        )
    }
    renderForecastItemDays(forecastData){
    
       return forecastData.map( forecast => 
       <ForecastItem weekDay={forecast.weekDay}
        hour={forecast.hour} 
        data={forecast.data}
        key={`${forecast.weekDay}${forecast.hour}`}
        />)
    }

    renderProgress()
    {

        return 'Cargando pronostico extendido'
    }
    render() {

        const {city} = this.props;
        const {forecastData}= this.state;
        return (

            <div>
               <h2 className='forecast-title'>Pronostico extendido {city}</h2> 
            {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {

    city: PropTypes.string.isRequired,
};

export default ForecastExtended;