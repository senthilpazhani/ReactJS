import React from 'react';

class Calculator extends React.Component {
   constructor() {
      super();
      this.state = {
         number1:12,
         number2:12,
        result:""
      }
      this.add=this.add.bind(this);
   }
   add =() =>
   {
      this.setState({
          result:this.state.number1+this.state.number2})
   }
   render() {
      return (
         <div>
            <CalculatorForm number1={this.state.number1} number2={this.state.number1} 
            result={this.state.result} add={this.add}></CalculatorForm>
         </div>
      );
   }
}

class CalculatorForm extends React.Component {
   render() {
      return (
        <div>
            <label>First Number</label>
                <input type="text" value={this.props.number1} ></input>
            <label>Second Number</label>
                <input type="text" value={this.props.number2} ></input>
            <button onClick={this.props.add}>Add</button>
            <label>Result</label>
                <input type="text" value={this.props.result} ></input>
        </div>
      );
   }
}
export default Calculator;