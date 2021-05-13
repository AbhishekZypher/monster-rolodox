import React, { Component } from 'react';
import { CardList } from './Components/Card-list/CardList.component'
import { SearchBox } from './Components/Search-box/Searchbox.components'

import './App.css';
class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //to fetch dummy data
      .then(response => response.json()) //will get the user in json format 
      .then(users => this.setState({ monsters: users })) //
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>
          Monster Rolodox
      </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
