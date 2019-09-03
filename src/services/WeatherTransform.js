import {RAINY, SUNNY, SNOWING, CLOUDY, DRIZZLE, THUNDER} from '../constants/weathers'
import convert from 'convert-units'

const getWeatherState=weather=>{
    const{ id }= weather[0];

    if(id<300){
        return THUNDER;
    }

    else if(id<400){
        return DRIZZLE;
    }
    
    else if(id<600){
        return RAINY;
    }

    else if(id<700){
        return SNOWING;
    }

    else if(id===800){
        return SUNNY;
    }

    else{
        return CLOUDY;
    }
}

const WeatherTransform= weather_data=>{

    const{weather}=weather_data;
    const{humidity,temp}= weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState= getWeatherState(weather);

    const data={
        humedad: humidity.toString(),
        temperatura: convert(temp).from('K').to('C').toFixed(2),
        weather: weatherState,
        viento: speed.toString(),
    }

    return data;
}   

export default WeatherTransform;