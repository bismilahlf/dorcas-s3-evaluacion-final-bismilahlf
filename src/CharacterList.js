import React, { Component } from 'react'
import CharacterCard from './CharacterCard';

class CharacterList extends Component {

    constructor(props){
        super(props)

        this.createCharacter = this.createCharacter.bind(this)
    }

  createCharacter(item){
    return (
        <li key={item.id}>
            <CharacterCard 
                character={item}
            />
        </li>
    )
  }

  render() {

    const myCharacters = this.props.characters.map(this.createCharacter)
    console.log('MAP', this.props.characters)
    return (
      <div>
        <ul>
            {myCharacters}
        </ul>
      </div>
    )
  }
}
export default CharacterList;