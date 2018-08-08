import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList';
import Filters from './Filters';

const HARRY_POTTER_CHARACTERS = "http://hp-api.herokuapp.com/api/characters"

class App extends Component {

  constructor(props){
    super(props)

    this.initialCharacters = []

    this.state = {
      characterList: []
    }
  }

  componentDidMount(){
    fetch(HARRY_POTTER_CHARACTERS)
      .then((response) => response.json())
      .then((JSONdata) => {
        this.initialCharacters = JSONdata.results
        this.setState({
          characterList: JSONdata.results
        });
      });
  }
  
  render() {
    return (
      <div>
        <CharacterList 
          characters={this.state.characterList}
        />
        <Filters/>
        
      </div>
    );
  }
}

export default App;
