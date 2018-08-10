import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetails from './CharacterDetails';
import Contador from './Contador';

const HARRY_POTTER_CHARACTERS = "https://hp-api.herokuapp.com/api/characters"

class App extends Component {

  constructor(props){
    super(props)

    this.filterByName = this.filterByName.bind(this);

    this.initialCharacters = [];
    
    this.state = {
      characterDirectory: [],
      contador: 0,
    }

    this.setCounter = this.setCounter.bind(this)
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

  setCounter(){
    this.setState((prevState, props) => {
      return {contador: prevState.contador + 1}
    })
      
    
  }
  
  
  render() {
    return (
      <div className="app-wrapper">
        <main className="main">
          <Switch>
            
              <Route exact path='/' render={ () => 
                <div>
                  <Filters classNAme="input-wrapper"
                    filterFunction={this.filterByName}
                  />
                  <div>
                    <h1>Personajes de Harry Potter</h1>
                    <Contador contador= {this.state.contador}/>
                    <CharacterList 
                    characters={this.state.characterDirectory}
                    counterFunction={this.setCounter}
                  />
                    
                  </div>
                </div>
              }/>

              <Route path='/details/:id' render={ (props) => 
                {
                  //Guarda el id de la url
                  const idFromURL = props.match.params.id;
                  //Recorre los datos de personajes y los compara con el id de la URL
                  for (const character of this.state.characterDirectory) {
                    if (character.id === parseInt(idFromURL) ) {
                      return (
                        <CharacterDetails character={ character } /> 
                      )
                    }
                  }
                }
              }/>
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
