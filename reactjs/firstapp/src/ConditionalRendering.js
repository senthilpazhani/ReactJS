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

    this.state={  successmessage:false, 
    email:'psk@gmail.com',
    successmessagetext:'Success Message'
    };       
    this.handlerOnChange = this.handlerOnChange.bind(this);
  };
  
  handlerSubmit=(event)=>{
    event.preventDefault();  
    this.setState({ 
      successmessage:(this.state.email)?true:false, 
      email:this.state.email,
      successmessagetext:'Success Message'
    });
  } 
  handlerOnChange=(event)=>{
    this.setState({ 
      email:event.target.value,
    });   
    console.log(event.target.email);
  }

  render() {
    return (<div className="App">
      <Header />      
      {!this.state.successmessage && (<form onSubmit={this.handlerSubmit.bind(this)} method="get" className="App_form">
        <div>
          <div><label htmlFor="email">Email : </label>
          <input type="email" name="email" id="email" value={this.state.email} length="150"
          onChange={this.handlerOnChange} /></div> 
        </div> {this.state.email}
        <div><button name="add_btn" id="add_btn" tabIndex="2"  >Submit</button></div>  
      </form>)} 
      {this.state.successmessage && (<div className="successmessage" >{this.state.successmessagetext}</div>)}
      <Footer /></div>       
    );
  }
}
 
export default App;