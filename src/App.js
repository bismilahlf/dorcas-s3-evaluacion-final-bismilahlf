import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList';
import Filters from './Filters';

const HARRY_POTTER_CHARACTERS = "http://hp-api.herokuapp.com/api/characters"

class App extends Component {

  constructor(props){
    super(props)

    this.filterByName = this.filterByName.bind(this);

    this.initialCharacters = []

    this.state = {
      characterDirectory: []
    }
  }

  componentDidMount(){
    fetch(HARRY_POTTER_CHARACTERS)
      .then((response) => response.json())
      .then((JSONdata) => {
        this.initialCharacters = JSONdata;
        this.setState({
          characterDirectory: JSONdata
        });
      });
  }

  filterByName(event){
    
    const filteredCharacters = this.initialCharacters.filter((item) => {
      const nameLowercase = item.name.toLowerCase();
      const valueLowercase = event.target.value.toLowerCase();
      return nameLowercase.includes(valueLowercase);
    })
    
    this.setState(
      {characterDirectory: filteredCharacters}
    )
  }
  
  render() {
    return (
      <div>
        <Filters
          filterFunction={this.filterByName}
        />
        <CharacterList 
          characters={this.state.characterDirectory}
        />
      </div>
    );
  }
}
export default App;
