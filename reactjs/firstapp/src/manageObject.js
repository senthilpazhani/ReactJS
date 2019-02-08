import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { id: '1',name:'PSK', age: 42 },
        { id: '2',name:'JB', age: 33 },
        { id: '3',name:'KPN', age: 68 },
      ],
    };
  }
  onRemoveItem = id => {
    this.setState(state => {
      const list = state.list.filter(item => item.id !== id);      
      return {
        list,
      };
    });
  };
  onUpdateItem = i => {
    this.setState(state => {
      const list = state.list.map((item) => {
        return (item.id === i)? {...item, age:item.age+1} : item; 
      });      
      return {
        list
      };
    });
  };
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.list.map(item => (
            <li key={item.id}>
              {item.name} is {item.age} years old.
              <button type="button" onClick={() => this.onUpdateItem(item.id)}>Update</button>
              <button type="button" onClick={() => this.onRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul> 
      </div>
    );
  }
}

export default App;