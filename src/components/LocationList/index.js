import React from 'react';
import PropTypes from 'prop-types'
import WeatherLocation from './../WeatherLocation/index'
import './styles.css'

// la funcion map se aplica a un arreglo de elementos a los cuales
//se les aplica la funcion que se le pasa por parametro. Se le
//puede agregar el parametro index a una funcion que le llegue
//un arreglo para trabajar con ese index que corresponde al
//indice del elemento en el arreglo


const LocationList =({list, onSelectedLocation})=>{

    const handleWeatherLocationClick=city=>{
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }
    const listWeatherLocation=({list})=>(
        list.map((city)=>(<WeatherLocation key={city} city={city} onWeatherLocationClick={()=> handleWeatherLocationClick(city)}    />))
    )

   return( <div className='locationList'>   
        {listWeatherLocation({list})}
    </div>)
}

LocationList.propTypes ={
   list: PropTypes.array.isRequired, 
   onSelectedLocation: PropTypes.func,
}  
export default LocationList;