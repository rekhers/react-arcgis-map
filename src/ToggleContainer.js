import React, { Component } from 'react';
import './App.css';

/*
*
*  Maintains local 
* 
*/
class ToggleContainer extends Component{

	render(){
		return (<div className="toggleContainer"> 
			      <div className="checkbox">
				        <label>
				          <input className="check_input" type="checkbox" onChange={this.props.onChange()} ref="check_me" /> Political Affiltion and Poverty by County
				        </label>
				      </div>
				</div>)
	}
}

export { ToggleContainer as default } 


