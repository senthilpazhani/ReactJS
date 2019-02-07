import React  from 'react'; 
import './App.css'; 
  
const Header = () => {
  return(<div className="App-header">Im Header</div>);
}
const Footer = () => {
  return(<div className="App-footer">Im Footer</div>);
}


class App extends React.Component { // Child Component   
  constructor(props){
    super(props); 

    this.state={  title:'To Do List',
    todos:[]
    };  
 
    this.handlerSubmit = this.handlerSubmit.bind(this);
    
  };
  
  handlerSubmit(event){event.preventDefault(); 
    const value = document.getElementById('task').value;
    this.setState({
      todos:[...this.state.todos,value],
      title: 'hi'
    });  
  }

  shouldComponentUpdate(nextProps, nextState){
  //console.log(nextProps, nextState)
  return true;
  }
  render() {
    return (<div className="App">
      <Header />      
      <form onSubmit={this.handlerSubmit} method="get" className="App_form">
        <div>
          <div><label htmlFor="firstname">Task : </label>
          <input type="text" name="task" id="task" value={this.state.task} length="150" tabIndex="0"
          onChange={this.handlerOnChange} /></div> 
        </div>
        <div><button name="add_btn" id="add_btn" tabIndex="2">Add</button></div> 
      </form> 
      <div className="todolist" ><h3>{this.state.title}</h3>
      <ul>{(this.state.todos || []).map(todo => (<li>{todo}</li>) )}
      </ul></div>
      <Footer /></div>       
    );
  }
}
 
export default App;