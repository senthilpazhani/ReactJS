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
    todos:[],
    task:'',
    };   
   // this.handlerSubmit = this.handlerSubmit.bind(this);
   // this.handlerOnChange = this.handlerOnChange.bind(this);    
    this.handlerRemove = this.handlerRemove.bind(this);    
  };
  
  handlerSubmit=(event)=>{event.preventDefault();  
    this.setState({
      todos:[...this.state.todos,this.state.task],
      title: 'My To Do List',
      task:'',
    });
  }

  handlerOnChange(event){
    this.setState({
      title: 'My To Do List',
      task:event.target.value,
    });   
  }

  handlerRemove(a){   
    this.setState({
      todos: this.state.todos.filter((item, index) => index !== a),
      task:this.state.task,
    });  
  }

  handlerUpdate(a){   
    this.state.todos[a]=this.state.task; 
    this.setState({
      todos:this.state.todos,
      task:'',
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
          <div><label htmlFor="task">Task : </label>
          <input type="text" name="task" id="task" value={this.state.task || 'default task'} length="150" tabIndex="0"
          onChange={this.handlerOnChange.bind(this)}/></div> 
        </div> 
        <div><button name="add_btn" id="add_btn" tabIndex="2"  >Add</button></div> 
      </form> 
      <div className="todolist" ><h3>{this.state.title}</h3>
      <ul>{(this.state.todos || []).map((todo, index) => (<li key={`id-${index}`}>{todo}
      <button onClick={()=>this.handlerRemove(index)} >Remove</button>
      <button onClick={()=>this.handlerUpdate(index)} >Update</button></li>) )}
      </ul></div>
      <Footer /></div>       
    );
  }
}
 
export default App;