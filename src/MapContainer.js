import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMap } from './actions/map';
import FeatureLayer from 'esri/layers/FeatureLayer';
import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';

/*
*
* 
*
*/
const basemap = new EsriMap({
          basemap: "gray"
        })



//init map with extent from feature layer  
const view = (domNode) => {
    return new MapView({
            container: domNode,
            map: basemap,
            extent: { 
            xmin:  -14402415.8165,
            ymin: 2533914.6774,
            xmax: -7091749.2841,
            ymax: 6945686.6054,
            spatialReference: 102100

          }
          });
}


//taken as a parameter in the popup template 
 // var arcadeExpressionInfos = [
 //    {
 //      name: "pov-percent-arcade",
 //      title: "Calculate percentage of poverty",
 //      expression:  "Round($feature.POP_POVERTY / $feature.TOTPOP_CY) * 100"

 //    }
 //  ];

 var popInPoverty = function(key, value, data){
    debugger
    return Math.round(data.POP_POVERTY/data.TOTPOP_CY) * 100;
 }



//TODO: unable to get arcade expressions to evaluate or or use custom functions ?
const template = { 
        title: "{COUNTY} County, {STATE}",
        content: [{ 
          type: "text",
          text: "<p> Out of a population of {TOTPOP_CY:NumberFormat} people, {POP_POVERTY:popInPoverty}% or <b> {POP_POVERTY:NumberFormat} </b> live in poverty.</p>" +
          "<ul> <li> Total Population:  <b>{TOTPOP_CY:NumberFormat} </b> </li>" +
          "<li>Conservatives:  <b>{CONSERVATIVE:NumberFormat} </b></li>" +
          "<li>Liberals:  <b>{LIBERAL:NumberFormat} </b></li></ul>",
        fieldInfos: [{
          fieldName: "TOTPOP_CY",
          format: {
            digitSeparator: true, // Use a comma separator for large numbers
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },{
          fieldName: "COUNTY",
          format: {
            digitSeparator: true, // Use a comma separator for large numbers
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },
        {
          fieldName: "STATE",
          format: {
            digitSeparator: true, // Use a comma separator for large numbers
            places: 0 // Sets the number of decimal places to 0 and rounds up
          }
        },

         {
          fieldName: "POP_POVERTY",
          format: {
            digitSeparator: true,
            places: 0
          }
        },

         {
          fieldName: "expression/pov-percent-arcade",
          format: {
            digitSeparator: true,
            places: 0
          }
        },

         {
          fieldName: "LIBERAL",
          format: {
            digitSeparator: true,
            places: 0
          }
        },
         {
          fieldName: "ID",
          format: {
            digitSeparator: true,
            places: 0
          }
        },
         {
          fieldName: "CONSERVATIVE",
          format: {
            digitSeparator: true,
            places: 0
          }
        }]
      }]
    }



/*
*
* Load the feature layer, include all fields and pass in the template
*
*/
const featureLayer = new FeatureLayer({
                url: "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/counties_politics_poverty/FeatureServer/0",
                  outFields: ["*"],
                  popupTemplate: template
              });



//set the map settings to props
const mapStateToProps = (state) => {
  return {
    mapCtrl: state.map.mapCtrl
  }
}

//dispatch our create map init function
const mapDispatchToProps = (dispatch) => {
  return {
    createMap: (view) => {
      dispatch(createMap(view))
    }
  }
}


//add or remove a layer from the basemap, called by toggle function
const addLayer = () =>{
    basemap.add(featureLayer);
}

// const removeLayer = () =>{
//     basemap.remove(featureLayer);
// }


//TODO: List all fields in the control div and then take user input to filter down by field or by value
// (IE areas where more than 50% of the population is conservative and impoverished)
const filter = () =>{
          featureLayer.definitionExpression = "POP_POVERTY > 10000";
      };



/*
* 
*  Currently this class handles both container and presentational features of the map div -- 
*  TODO: Split out into a presentational component map and a container that handles the toggle? 
*
*/
class MapContainer extends Component{

  constructor(props){
    super(props);
    this.toggleLayer = this.toggleLayer.bind(this);
  }

	componentDidMount(props){
      if(!this.props.mapCtrl){
      this.props.createMap(view(this.refs.mapView));
    }

      addLayer();
	}

  togglePovertyFilter(props){
    featureLayer.definitionExpression = props.showPoverty ? "POP_POVERTY > 10000" : "1=1";
  }

  toggleLayer(props){
    featureLayer.visible = props.showLayer; 
  }


  componentWillReceiveProps(props){
    this.toggleLayer(props);
    this.togglePovertyFilter(props);
  }


	render(){
        return(<div ref='mapView' className='map-view'></div>)

	}
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
