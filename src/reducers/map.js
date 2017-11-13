import MapView from 'esri/views/MapView';
// import FeatureLayer from 'esri/views/FeatureLayer';
import EsriMap from 'esri/Map';

const map = (state = { }, action) => {
  switch (action.type) {
    case 'CREATE_MAP':
      return {
        mapCtrl: new MapView({
          container: action.domNode,
          map: new EsriMap({basemap: 'hybrid'}),
          zoom: 2

        })

      }
      // case 'ADD_LAYER':
      // return{
      //   mapCtrl: new MapView({
      //     featureLayer: new FeatureLayer({
      //     url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
      //   })

      // })

      // }


    default:
      return state
  }
}

export default map;