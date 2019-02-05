import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      myTitle:"Mr",
      myName:this.props.myName,
      btnText:"Click Me !"};
      this.handleClick = this.handleClick.bind(this); //TypeError: Cannot read property 'setState' of undefined
  }

  handleClick(){
    this.setState({btnText:"Hi I'm Clicked "})
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header"> Welcome ! {this.state.myTitle} {this.state.myName} here
          <button onClick={this.handleClick}>{this.state.btnText}</button>
        </header>
      </div>
    );
  }
}; 

App.defaultProps={
  myName : "PSK"
};

export default App;