import React, { Component } from 'react'
import CharacterCard from './CharacterCard';

class CharacterList extends Component {

    constructor(props){
        super(props)

        this.createCharacter = this.createCharacter.bind(this)
    }

  createCharacter(item){
    const id = item.name + item.age + item.house
    return (
        <li key={id}>
        
            <CharacterCard 
                character={item}
            />
        </li>
    )
  }

  render() {

    const myCharacters = this.props.characters.map(this.createCharacter)
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