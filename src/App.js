import React, { Component } from 'react';
import './App.css';
import { toggleLayer } from './actions/map';
import MapContainer from './MapContainer';
import ToggleContainer from './ToggleContainer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    showLayer: state.map.showLayer === undefined ? false : state.map.showLayer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLayer: (layer) => {
      dispatch(toggleLayer(layer))
    }
  }
}



/*
* This parent component maintains local internal state of the checkbox 
*  and updates with the callback passed to ToggleContainer 
*
*/
export class App extends Component {

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
				this.handleChangePoverty = this.handleChangePoverty.bind(this);

		this.state = {showLayer: false, showPoverty: false}


	}
  
   componentDidMount(){

   }

 	handleChange(){		
		this.setState({showLayer: !this.state.showLayer });
	}

	 handleChangePoverty(){		
		this.setState({showPoverty: !this.state.showPoverty });
	}


  render() {
    return (<div className="App">
             <MapContainer showLayer={this.state.showLayer} showPoverty={this.state.showPoverty}/>
             <ToggleContainer layer={this.state.showLayer} poverty={this.state.showPoverty} togglePoverty={this.handleChangePoverty} toggleLayer={this.handleChange}/>
           </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



