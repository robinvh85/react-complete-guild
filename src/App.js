import React, { Component } from 'react';
import classes from './App.css';
import Persons from './Persons/Persons';
import AuthContext from './context/auth-context';
import Footer from './components/footer/Footer';

class App extends Component {

  constructor(props){
    super(props)
    console.log("[App] - Constructor")
  }

  state = {
    persons: [
      {id: 1, name: 'VH1', age: 15},
      {id: 2, name: 'VH2', age: 20}
    ],
    isShowList: false,
    otherValue: 'Other values',
    isAuthenticated: false
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

  toggleClickHandler = () => {
    this.setState({isShowList: !this.state.isShowList})
  }

  static getDerivedStateFromProps(state, props) {
    console.log("[App] - getDeviredStateFromProps")
    return state;
  }

  componentDidMount() {
    console.log("[App] - componentDidMount")
  }

  loginHandler() {
    this.setState({ isAuthenticated: true });
  }

  logoutHandler() {
    this.setState({ isAuthenticated: false });
  }

  render() {
    console.log("[App] - render")
    let personList = null;
    let btnClass = '';

    if(this.state.isShowList){
      personList = <Persons 
        persons={this.state.persons} 
        changeNewHandler={this.changeNewHandler}
        deleteHandler={this.deleteHandler}
      />

      btnClass = classes.red;
    }

    return (
      <div className="App">
        <h1>Hello, I'm React App</h1>
        <button className={btnClass} onClick={this.toggleClickHandler}>Toggle</button>
        { this.state.isAuthenticated && <button className={btnClass} onClick={() => this.logoutHandler()}>Logout</button> }

        <AuthContext.Provider value={{
          authenticated: this.state.isAuthenticated,
          login: this.loginHandler.bind(this)
        }}>
          {personList}
          <Footer />
        </AuthContext.Provider>
        
      </div>
    );
  }
}

export default App;
