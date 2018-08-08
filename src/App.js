import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList';
import Filters from './Filters';

const HARRY_POTTER_CHARACTERS = "http://hp-api.herokuapp.com/api/characters"

class App extends Component {

  constructor(props){
    super(props)

    // this.initialCharacters = []

    this.state = {
      characterDirectory: []
    }
  }

  componentDidMount(){
    fetch(HARRY_POTTER_CHARACTERS)
      .then((response) => response.json())
      .then((JSONdata) => {
        this.initialCharacters = JSONdata
        this.setState({
          characterDirectory: JSONdata
        });
      });
  }
  
  render() {
    return (
      <div>
        <CharacterList 
          characters={this.state.characterDirectory}
        />
        <Filters/>
      </div>
    );
  }
}
export default App;
