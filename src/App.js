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
		this.state = this.props;
	}
  
   componentDidMount(){

   }

 	handleChange(){		
		this.setState({showLayer: document.querySelector('.check_input').checked });
	}


  render() {
    return (<div className="App">
             <MapContainer showLayer={this.state.showLayer}/>
             <ToggleContainer onChange={() => this.handleChange}/>
           </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



