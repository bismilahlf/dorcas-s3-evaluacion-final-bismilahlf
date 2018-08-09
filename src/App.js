import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetails from './CharacterDetails';

const HARRY_POTTER_CHARACTERS = "http://hp-api.herokuapp.com/api/characters"

class App extends Component {

  constructor(props){
    super(props)

    this.filterByName = this.filterByName.bind(this);

    this.initialCharacters = [];

    this.state = {
      characterDirectory: []
    }
  }

  componentDidMount(){
    fetch(HARRY_POTTER_CHARACTERS)
      .then((response) => response.json())
      .then((JSONdata) => {

        const JSONdataWithIDs = JSONdata.map(
          (item, index) => {
            return {...item, id: index}
        })

        this.initialCharacters = JSONdataWithIDs;

        this.setState({
          characterDirectory: JSONdataWithIDs
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

  selectCharacter(id) {
    for (const character of this.state.characterDirectory) {
      if (character.id === parseInt(id) ) {
        return character;
      }
    }
  }
  
  render() {
    return (
      <div>
        <header>
          Personajes de Harry Potter
        </header>
        <main>
          <Switch>
              <Route exact path='/' render={ () => 
                <div>
                  <Filters
                    filterFunction={this.filterByName}
                  />
                  <CharacterList 
                    characters={this.state.characterDirectory}
                  />
                </div>
              }/>

              <Route path='/details/:id' render={ (props) => 
                <CharacterDetails
                  character={this.selectCharacter(props.match.params.id)}
                /> 
              }/>
          </Switch>
        </main>  
      </div>
    );
  }
}
export default App;
