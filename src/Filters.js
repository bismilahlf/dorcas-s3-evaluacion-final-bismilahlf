import React, { Component } from 'react';

class Filters extends Component {

  render() {
    return (
      <div>
        <input type="text" placeholder="Search by character" onChange={this.props.filterFunction}/>
      </div>
    )
  }
}
export default Filters;