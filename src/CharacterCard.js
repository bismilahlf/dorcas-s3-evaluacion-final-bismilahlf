import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.css';

class CharacterCard extends Component {
  
  render() {
    return (
      <div className="card-wrapper">
        <Link className="link" to={`/details/${this.props.character.id}`}>
          <div className="character-card">
            <img src={this.props.character.image} className="character-image" alt=""/>
            <h1 className="character-name">{this.props.character.name}</h1>
            <h2 className="character-house">{this.props.character.house}</h2>
          </div>
        </Link>
      </div>
    )
  }
}
export default CharacterCard;