import React, { Component } from 'react';

class App_c extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [["Male", "M"], ["Female", "F"], ["Other", "O"]],
      gender:"M"
    };
  } 
  handlerChange=(event)=>{
    
    this.setState({list:this.state.list,
    gender:event.target.value})}
  render() {
    return (
      <div>
      {
        this.state.list.map(([text, value], i) => (
        <div key={ i }>
          <input type="radio" name="gender"
                  checked={ this.state.gender === value } 
            onChange={this.handlerChange} 
            value={ value } /> 
              { text }
              </div>
            ))
          }{this.state.gender} Selected
        </div> 
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);  
    console.log(data);
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="radio-buttons">
        Windows
        <input id="windows" value="windows" name="platform" checked={this.state.platform==='windows'} type="radio" onChange={this.handleChange}/>
        Mac
        <input id="mac" value="mac" name="platform" type="radio" onChange={this.handleChange}/>
        Linux
        <input id="linux" value="linux" name="platform" type="radio" onChange={this.handleChange}/>
        <button>Submit</button>
      </div>
      </form>
    );
  }
}
export default App;