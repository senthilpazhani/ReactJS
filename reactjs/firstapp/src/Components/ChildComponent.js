import React from 'react';

class ChildComponent extends React.Component { // rename as StatelessApp to execute
    render() {
      return (
        <h1>{this.props.myTitle}</h1>
             
      );
    }
  }
  
export default ChildComponent;