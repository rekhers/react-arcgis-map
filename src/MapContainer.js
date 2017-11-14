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


//arcadeExpressionInfos 
 var arcadeExpressionInfos = [
    {
      name: "pov-percent-arcade",
      title: "Calculate percentage of poverty",
      expression:  "Round($feature.POP_POVERTY / $feature.TOTPOP_CY) * 100"

    }

  ];



//TODO: unable to get arcade expressions to evaluate or or use custom functions ?
const template = { 
        title: "{COUNTY} County, {STATE}",
        content: [{ 
          type: "text",
          text: "<p> Out of a population of {TOTPOP_CY:NumberFormat}, <b> {POP_POVERTY:NumberFormat} </b> live in poverty.</p>" +
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
        }],
                    expressionInfos: arcadeExpressionInfos
      }]
    }



const featureLayer = new FeatureLayer({
                url: "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/counties_politics_poverty/FeatureServer/0",
                  outFields: ["*"],
                  popupTemplate: template
              });




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


const filter =() =>{
       featureLayer.queryFeatures().then(function(results){
        console.log(results);  // prints all the client-side graphics to the console
      });
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
    if(props.showLayer === true){
      addLayer();
      filter();
    } else if(props.showLayer === false) {
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
