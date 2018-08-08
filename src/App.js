import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList';
import Filters from './Filters';


class App extends Component {
  render() {
    return (
      <div>
        <CharacterList/>
        <Filters/>
        
      </div>
    );
  }
}

export default App;
