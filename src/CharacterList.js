import React, { Component } from 'react'
import CharacterCard from './CharacterCard';
import './CharacterList.css';


class CharacterList extends Component {
  render() {
    return (
        <ul className="character-list">
            {
                this.props.characters.map( (item) => {
                    return (
                        <li key={item.name + item.age + item.house}>
                            <CharacterCard 
                                character={item}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
  }
}
export default CharacterList;