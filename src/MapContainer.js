import React, { Component } from 'react';


export class MapContainer extends Component{

	componentDidMount(){
	    if (!this.props.mapCtrl) {
	      this.props.createMap(this.refs.mapView);
	    }
	}

	render(){
		return (<div ref='mapView' className='map-view'></div>)
	}
}