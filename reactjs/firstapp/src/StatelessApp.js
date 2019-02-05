// functional stateless component
//render() { // render will not work/cant be used in => function
// this function accepts paramenter as props
import React, { Component } from 'react';
import './App.css';
import Header from './Components/ChildComponent';
import Addition from './Components/ChildAddition';

const StatelessApp_fun = ()=> { // rename as StatelessApp to execute
    return (
      <div className="App">
        <header className="App-header"> This is Stateless Functional Component
        </header>
      </div>
    ); 
}

// Stateless less componenet using class
class StatelessApp_class extends Component {  
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          This is Stateless Class Component.
        </header>
      </div>
    );
  }
}


//Container and Child componenets 
class StatelessApp_child extends Component { // Container component
  render() {
    return (
      <div className="App">
        <div className="App-header"> 
          <Header myTitle="Hi I'm Header"></Header>
        </div>
      </div>
    );
  }
}

//Child Addition function
class StatelessApp  extends Component { // Child component
  render() {
    return (
      <div className="App">
        <div className="App-header"> 
          <Addition val1={200} val2={100}></Addition>
        </div>
      </div>
    );
  }
} 

export default StatelessApp;