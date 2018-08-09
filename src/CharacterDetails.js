import React, { Component } from 'react';
import './CharacterDetails.css';

class CharacterDetails extends Component {
    render() {
    return (
        <div className="character-details">
            <img src={this.props.character.image} className="character-image" alt=""/>
            <h1>{this.props.character.name}</h1>
            <h2>Casa: {this.props.character.house}</h2>
            <h2>Nacimiento: {this.props.character.dateOfBirth}</h2>
            <h2>Patronus: {this.props.character.patronus}</h2>
            <h2>Estado: {this.props.character.alive ? "VIVO" : "MUERTO"}</h2>
        </div>
    )
  }
}
export default CharacterDetails;