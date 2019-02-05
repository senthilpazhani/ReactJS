import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      myTitle:"Mr",
      myName:this.props.myName,
      btnText:"Click Me !"}
  }
  handleClick(){
    this.setState={
      btnText:"Hi I'm Clicked "
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header"> Welcome ! {this.state.myTitle} {this.state.myName} here
          <button onClick={this.state.handleClick}>{this.state.btnText}</button>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
};
App.defaultProps={
  myName : "PSK"
}
export default App;
