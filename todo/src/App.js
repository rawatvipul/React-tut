import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      count:0
    }
    console.warn("constructor")
  }
  componentDidUpdate(preProps,preState,snapshot )
  {
    console.warn("componentDidUpdate",preState)
  }
  render()
  {
    console.warn("render")
    return (
      <div className="App">
        <h1>Hello {this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update</button>
        <br></br>
        <button onClick={()=>{this.setState({count:this.state.count-1})}}>lesses</button>
      </div>
    );
  }
}

export default App;
