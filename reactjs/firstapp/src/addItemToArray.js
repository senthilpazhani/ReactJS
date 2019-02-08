import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      list: ['a', 'b', 'c'],
    };
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  onAddItem = event => {
    
    // this.setState(state => {
    //   //const list = state.list.push(state.value);
    //   //not allowed AND not working
    //   //First, it is not allowed to use the array push method, because it mutates the array. It doesn’t leave the array intact but changes it. Instead, there should be a new array created which is used to update the state.
    //   //Second, The push to array method wouldn’t work, because it doesn’t return the updated array. Instead, it returns the length of the updated array (which is 4 in this case).
    //   const list = state.list.concat(state.value);
    //   //const list = state.list.map(item => item + 1); option to update an array

    //   return {
    //     list,
    //     value: '',
    //   };
    // });
    this.setState({value:'',
    list:[this.state.value,...this.state.list]
    });

  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <input type="text" value={this.state.value} onChange={this.onChangeValue} />
        <button type="button" onClick={this.onAddItem} disabled={!this.state.value} >
          Add
        </button>
      </div>
    );
  }
}

export default App;