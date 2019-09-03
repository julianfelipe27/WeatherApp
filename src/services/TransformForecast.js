import moment from 'moment'
import 'moment/locale/es'
import WeatherTransform from './WeatherTransform'

const TransformForecast=data=>(

   data.list.filter(item=> (

    moment.unix(item.dt).utc().hour() === 6||
    moment.unix(item.dt).utc().hour()===12 ||
    moment.unix(item.dt).utc().hour()===18
   )).map(item=>({
       weekDay: moment.unix(item.dt).format('dddd'),
       hour: moment.unix(item.dt).utc().hour(),
        data: WeatherTransform(item)
   }) ) 
    )

export default TransformForecast;