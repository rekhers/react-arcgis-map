import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { createMap } from './actions/map';
import { MapContainer } from './MapContainer.js';
// import FeatureLayer from 'esri/views/FeatureLayer';


const mapStateToProps = (state) => {
  return {
    mapCtrl: state.map.mapCtrl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMap: (domNode) => {
      dispatch(createMap(domNode))
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer mapCtrl={this.props.mapCtrl} createMap={this.props.createMap}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
