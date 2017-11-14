import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMap } from './actions/map';
import FeatureLayer from 'esri/layers/FeatureLayer';
import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';

var featureLayer = new FeatureLayer({
                url: "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
              });

var basemap = new EsriMap({
          basemap: "hybrid"
        })


const view = (domNode) => {
    return new MapView({
            container: domNode,
            map:basemap,
            extent: { // autocasts as new Extent()
            xmin: -9177811,
            ymin: 4247000,
            xmax: -9176791,
            ymax: 4247784,
            spatialReference: 102100
          }
          });
}

const mapStateToProps = (state) => {
  return {
    mapCtrl: state.map.mapCtrl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMap: (view) => {
      dispatch(createMap(view))
    }
  }
}



const addLayer = () =>{
           basemap.add(featureLayer);
}


const removeLayer = () =>{
           basemap.remove(featureLayer);
}


/*
* 
*  This container class from 
*
*/
class MapContainer extends Component{

  constructor(props){
    super(props);
    this.state = {handleLayer: false};
  }

	componentDidMount(props){
      if(!this.props.mapCtrl){
      this.props.createMap(view(this.refs.mapView));
    }
	}


  shouldComponentUpdate(props){
    console.log(props);

    console.log(props.showLayer);



    if(props.showLayer === true){
      addLayer();
    } else if(props.showLayer === false) {
      console.log("are we getting here?!");
      removeLayer();
    }
    return true;
  }

 
  

 
	render(){
        return(<div ref='mapView' className='map-view'></div>)

	}
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
