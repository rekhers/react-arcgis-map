import React, { Component } from 'react';
import './App.css';

/*
*
*  Presentational Component that returns value of checkbox to parent through callback received as props
* 
*/
class ToggleContainer extends Component{

	render(){
		return (<div className="toggleContainer"> 
			      <div className="checkbox">
				        <label>
				          <input id="checkbox" className="check_input" type="checkbox" onChange={this.props.toggleLayer} ref="check_me" checked={this.props.layer}/> Political Affiliation and Poverty by County
				        </label>
				      </div>
				   <div className="checkbox"> 
				   	    <label>
				          <input className="check_input" type="checkbox" onChange={this.props.togglePoverty} ref="check_me" checked={this.props.poverty}/> Population in Poverty > 10,000
				        </label>
				   </div>

				</div>)
	}
}

export { ToggleContainer as default } 


