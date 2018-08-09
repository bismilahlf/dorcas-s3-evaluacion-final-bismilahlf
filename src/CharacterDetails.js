import React, { Component } from 'react';
import './CharacterDetails.css';

class CharacterDetails extends Component {
    render() {
    return (
        <div className="character-details">
            <img src={this.props.character.image} className="characterdetails-image" alt=""/>
            <div className="data-wrapper">
                <div className="data-name-wrapper">
                    <h1 className="data-name">{this.props.character.name}</h1>
                </div>
                <div className="data-sub-wrapper">
                    <h2>Casa: {this.props.character.house}</h2>
                    <h2>Nacimiento: {this.props.character.dateOfBirth}</h2>
                    <h2>Patronus: {this.props.character.patronus}</h2>
                    <h2>Estado: {this.props.character.alive ? "VIVO" : "MUERTO"}</h2>
                </div>
            </div>
        </div>
    )
  }
}
export default CharacterDetails;