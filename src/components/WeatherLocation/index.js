import React, {Component} from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import PropTypes from 'prop-types'
import WeatherTransform from '../../services/WeatherTransform'
import CircularProgress from 'material-ui/CircularProgress';
import './styles.css'

//esto es una arrow function, variantes de llaves y parentesis
//uso llaves cuando es una sola linea de codigo (involucra un return),
//si necesito mas sentencias uso paréntesis

const app_id='4370603965ef765c39994f0e18348bcc';

class WeatherLocation extends Component{ 

    constructor({city}){
        super();
        this.state={
            data: null,
            city,


        }
    }
    
    handleUpdateClick=()=>{
       
    const api_weather= `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${app_id}`;
    
    fetch(api_weather).then(data =>{
        return data.json();
    }).then(weather_data=>{
        const data= WeatherTransform(weather_data);
        this.setState({data})         
    });

      };

    
      //Momento entre constructor y render, despues de que 
      //el primero termina y antes de que el último se dé
    componentWillMount() {
          this.handleUpdateClick();
      }
      
    render = () => {

        const {onWeatherLocationClick}= this.props;

        return(
        <div className='weatherLocationContent' onClick={onWeatherLocationClick}>
            <Location ciudad={this.state.city} />
            {this.state.data ? < WeatherData data={this.state.data} />: <CircularProgress color={'blue'}></CircularProgress>} 

        </div>
        )
    }
}

WeatherLocation.propTypes={

    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;