import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      list: [1,2,3,4,5],
    };
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  onAddItem = event => { 
    this.setState(state => { 
      const list = state.list.map((item,index) => item + 10); //option to update an array 
      return { list};
    });  
  };
  onUpdateItem=(i)=>{ 
    this.setState(state => { 
    const list = state.list.map((item,index) => {
      return (index===i)? item+10 : item;
    }); //option to update an array 
    return {list};
    });  
  };
  onRemoveItem = i => {
    this.setState(state => {
      const list = state.list.filter((item, index) => index !== i);
      return {list};
    });
  };
  onRemoveFirstItem = () => {
    this.setState(state => {
      const [first, ...rest] = state.list; 
      return {
        list: rest,
      };
    });
  };
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item}>
              The person is {item} years old.
              <button type="button" onClick={() => this.onUpdateItem(index)} >Add</button>
              <button type="button" onClick={() => this.onRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
 
        <button type="button" onClick={this.onAddItem} >Add</button>
        
      </div>
    );
  }
}

export default App;