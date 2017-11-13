import MapView from 'esri/views/MapView';
// import FeatureLayer from 'esri/views/FeatureLayer';
import EsriMap from 'esri/Map';

const basemap = new EsriMap({basemap: 'hybrid'});

const view = (domNode) => {
    return new MapView({
            container: domNode,
            map: basemap,
            zoom: 2
          });
}

const map = (state = { }, action) => {
  switch (action.type) {
    case 'CREATE_MAP':
      return {
        mapCtrl: view(action.domNode)
      }
      case 'ADD_LAYER':
      return{
          featureLayer: action.layer
      }


    default:
      return state
  }
}

export default map;