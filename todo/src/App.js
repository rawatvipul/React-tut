import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      name:"Vipul"
    }
    // console.warn("constructor")
  }
  componentDidMount()
  {
    console.warn("Componentdidimount")
  }
  render()
  {
    console.warn("render")
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"rawat"})}}>Update</button>
      </div>
    );
  }
}

export default App;
