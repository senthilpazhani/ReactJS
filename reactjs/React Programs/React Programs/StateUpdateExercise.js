import React from 'react';
class Button extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        text: "Please Click me!",
        clickCount: 0
      };
    }
    // Method updateCount()
    updateCount (){
      this.setState({
          clickCount: this.state.clickCount + 1,
          text: "I have been Clicked"
        
      });
    }
   
    render() {
      return (
        <button onClick={()=>this.updateCount()}>
          {this.state.text} : {this.state.clickCount}
        </button>
      );
    }
  }
 export default Button;  