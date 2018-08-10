import React, { Component } from 'react'

class Contador extends Component {
  render() {
    return (
      <div>
        {this.props.contador}
      </div>
    )
  }
}
export default Contador;