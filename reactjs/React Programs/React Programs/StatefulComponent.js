import React from 'react';

class StatefulComponent extends React.Component {
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
             <p>My name is {this.state.name}</p>
             
          </div>
       );
    }
  }
  export default StatefulComponent;