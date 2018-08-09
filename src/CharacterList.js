import React, { Component } from 'react'
import CharacterCard from './CharacterCard';

class CharacterList extends Component {
  render() {
    return (
      <div>
        <ul className="character-list">
            {
                this.props.characters.map( (item) => {
                    return (
                        <li key={item.name + item.age + item.house}>
                            <CharacterCard character={item} />
                        </li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}
export default CharacterList;