import React, { Component } from 'react';
import Basemap from './Basemap';



/*
* 
*  This container class from 
*
*/
class MapContainer extends Component{

  constructor(props){
    super(props);
    this.state = {showLayer: this.props};
  }

	componentDidMount(props){
    this.toggleLayer(props);
	}

 


  toggleLayer(){ 
  if(this.props.showLayer === undefined){
    this.props.showLayer = false;
  }

    if(this.props.showLayer === true){
      console.log("true in toggle");
      // addLayer();
    } else {
        console.log("false in toggle");

    }
  }

 
	render(){
		return (<Basemap showLayer={this.state.showLayer}/>)
	}
}


export { MapContainer as default } 

