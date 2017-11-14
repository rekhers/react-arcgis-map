
    



// const mapStateToProps = (state) => {
//   return {
//     mapCtrl: state.map.mapCtrl
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createMap: (view) => {
//       dispatch(createMap(view))
//     }
//   }
// }


// const addLayer = () =>{
// 	console.log("in add layer");
// 		var featureLayer = new FeatureLayer({
//           			url: "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
//       			  });
 
//       		 basemap.add(featureLayer);
// }


// const removeLayer = () =>{
// 	console.log("in add layer");
// 		var featureLayer = new FeatureLayer({
//           			url: "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
//       			  });
 
//       		 basemap.remove(featureLayer);
// }

// class Basemap extends Component{

// 	constructor(props){
// 		super(props);
// 		this.state = this.props;
// 	}

// 	componentDidMount(){
// 		if(!this.props.mapCtrl){
// 			this.props.createMap(view(this.refs.mapView));
// 		}
			
// 			addLayer();

// 	}

// 	shouldComponentUpdate(props){
// 				console.log(this.props);

// 				removeLayer();
// 		// if(this.props.handleLayer === false){
// 		// 	removeLayer();
// 		// } else {
// 		// 	addLayer();
// 		// }

// 		return true;
// 	}


// 	render(){
// 		return(<div ref='mapView' className='map-view'></div>)
// 	}

// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Basemap);


