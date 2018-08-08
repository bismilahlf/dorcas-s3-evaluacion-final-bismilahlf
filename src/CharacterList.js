import React, { Component } from 'react'
import CharacterCard from './CharacterCard';

class CharacterList extends Component {

    constructor(props){
        super(props)

        
    }

  createCharacter(index, item){
    return (
        <li key={index}>
            <CharacterCard 
                character={item}
            />
        </li>
    )
  }

  render() {

    const characters = this.props.characters.map(this.createCharacter)
    return (
      <div>
        <ul>
            {characters}
        </ul>
      </div>
    )
  }
}
export default CharacterList;