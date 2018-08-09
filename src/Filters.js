import React, { Component } from 'react';
import './Filter.css'

class Filters extends Component {

  render() {
    return (
      <div className="input-wrapper">
        <input className="input" type="text" placeholder="Search by character" onChange={this.props.filterFunction}/>
      </div>
    )
  }
}
export default Filters;