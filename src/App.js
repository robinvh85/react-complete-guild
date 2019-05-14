import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'VH1', age: 15},
      {name: 'VH2', age: 20}
    ],
    other_value: 'Other values'
  }

  changeNewHandler = (event, index) => {
    const persons = [...this.state.persons]
    persons[index].name = event.target.value
    this.setState({persons: persons})
  }

  deleteHandler = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({persons: persons})
  }

  render() {
    const personList = this.state.persons.map((person, index) => {
      return <Person 
        key={index}
        name={person.name} 
        age={person.age} 
        changed={(event) => this.changeNewHandler(event, index)}
        deleteItem={(event) => this.deleteHandler(index)}
      />
    })

    return (
      <div className="App">
        <h1>Hello, I'm React App</h1>
        {personList}
      </div>
    );
  }
}

export default App;
