import React, { Component } from 'react'
import CharacterCard from './CharacterCard';
import './CharacterList.css';


class CharacterList extends Component {
  render() {
    return (
        <div className="characterlist-wrapper">
            <main>
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
            </main>
        </div>
    )
  }
}
export default CharacterList;