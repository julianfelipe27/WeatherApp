import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocationList from "./components/LocationList"
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import { Grid, Row, Col } from 'react-flexbox-grid';
import ForecastExtended from './components/ForecastExtended'

//let --> scope: global, local bloque
//var --> scope: global, local para funcion
//const --> scope : globabl, local bloque, previene la sobreescritura o reasignacion, sin embargo
// si es un objeto se le pueden cambiar sus propiedades o agregarsele nuevas.
// let y const no permiten hoisting, es decir no se puede acceder a la variable si no
// ha se le ha asignado un valor (da reference error)

const list = ['Cali,CO', 'Bogota,CO', 'Cucuta,CO', 'Ginebra,CO'];

class App extends Component {

  constructor(){
    super()
    this.state={
      city: null,
    }
  }
  handleSelectedLocation = city => {

    this.setState({city});
    console.log(`handleSelectLocation ${city}`);
  }

  render = () => {

    return (

      <MuiThemeProvider>
        {//xsOffset={?} --> segun se le indique deja esa cantidad de columnas vacias
          //para que se desplazen las otras

          // solo indicar las propiedades significa autosizing, es decir si no se le 
          // especifica ningun valor a sus parametros


          // el alineamiento horizontal se especifica como parametro del Row con start="xs" o 
          // center="md" o end="lg", para el vertical es top o middle

          //tipos de distribucion, around="xs", between="md" que ajusta las columnas a espacios
          //iguales asi no se esten usando todas  

          //si solo se le especifica un tamaño como parametro a las columnas, solo mostrara ese
          //tamaño en cualquiera de los otros
        
        /** <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={2} lg>
              <div className='red'></div>
            </Col>
            <Col xs={12} sm={6} md={4} lg>
              <div className='green'></div>
            </Col>
            <Col xs={12} sm={6} md={4} lg>
              <div className='blue'></div>
            </Col>


          </Row>

          </Grid>
      */}
      

      <Grid fluid>  
        <Row>
          <Col xs={12}>
            <AppBar title='WeatherApp'/>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
        <LocationList list={list} onSelectedLocation={this.handleSelectedLocation}/>
          </Col>
          <Col sm={12} md={6}>
            <Paper zDepth={4}>
            <div className="detail">
              {(this.state.city) ?<ForecastExtended city={this.state.city}/>:<p>cargando...</p>}
            </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
      </MuiThemeProvider>

    );
  }
}

export default App;
