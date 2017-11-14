// import MapView from 'esri/views/MapView';
// import EsriMap from 'esri/Map';




const map = (state = { }, action) => {
  switch (action.type) {
    case 'CREATE_MAP':
      return {
        mapCtrl: action.view
      }
      case 'TOGGLE_LAYER':
      return{
          showLayer: action.bool
      } 
     

    default:
      return state
  }
}

export default map;