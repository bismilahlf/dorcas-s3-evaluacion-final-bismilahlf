import React, { Component } from 'react'

class CharacterCard extends Component {

  
  render() {
    return (
      <div className="character-card">
        <img src={this.props.character.image} className="character-image" alt=""/>
        <h1>{this.props.character.name}</h1>
        <h2>{this.props.character.house}</h2>
      </div>
    )
  }
}
export default CharacterCard;