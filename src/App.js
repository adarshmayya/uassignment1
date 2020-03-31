import React, { Component } from 'react';
import UserOutput from "./UserOutput/UserOutput"
import UserInput from "./UserInput/UserInput"
import './App.css';

class App extends Component{

  state= {
    username: [ 
      {name: "Adarsh", text: "chelsea is best"},
      {name: "Aditya", text: "Football is canceled because of covid-19"}
    ]
  }

  usernameHandler = (event) => {
    this.setState({
      username: [
        {name: "Adarsh", text: "chelsea is best"},
        {name: event.target.value, text: "Football is canceled because of covid-19"}
      ]
    })

    }
  

  render(){
    return (
      <div className="App">
      <h1>Asignment 1</h1>
      <UserInput  changed = {this.usernameHandler}/>
       <UserOutput name = {this.state.username[0].name} text={this.state.username[0].text}/>
       <UserOutput name={this.state.username[1].name} text={this.state.username[1].text}/>
      </div>
    );
  }
  }


 

export default App;
