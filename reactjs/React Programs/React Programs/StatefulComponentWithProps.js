import React from 'react';
class StatefulComponentWithProps extends React.Component {
    constructor(props)
    {
        super(props)
        {
            
        }
        this.state={name:this.props.name}
    }
    render() {
       return (
          <div>
             <h2>Stateful Component</h2>
             <Header name={this.state.name}></Header>
             <p>My name is {this.state.name}</p>
          </div>
       );
    }
  }

  class Header extends React.Component {
    constructor(props)
    {
        super(props)
        {
            
        }
        this.state={name:this.props.name}
    }
    render() {
       return (
          <div>
             <h1>Header value: {this.state.name}</h1>
          </div>
       );
    }
 }
  export default StatefulComponentWithProps;