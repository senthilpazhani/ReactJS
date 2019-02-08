import React  from 'react'; 
import './App.css'; 
import styles from './Appcss'; 
 

class App extends React.Component { // Child Component   
  constructor(props){
    super(props);

    this.state= {email:null,
      password:null,emailstyle:null,
      passwordstyle:null,successmessage:null}

    this.email =React.createRef();
    this.password =React.createRef(); 

    this.handlerSubmit = this.handlerSubmit.bind(this);
    
  };
 
  handlerSubmit=(event)=>{event.preventDefault(); 
    var emailstyle = (this.email.current.value) ? styles.green: styles.red;
    var passwordstyle = (this.password.current.value) ? styles.green: styles.red;
    var successmeg = null;
    if (emailstyle.borderColor==='green' & passwordstyle.borderColor==='green' ){ successmeg = <h3>Signed up with email:{this.email.current.value} password: {this.password.current.value}</h3> ;} 
 
    this.setState({
      email:this.email.current.value,
      password:this.password.current.value,
      emailstyle:emailstyle,
      passwordstyle:passwordstyle,
      successmessage:successmeg
    }); 
    if(successmeg) {document.getElementById('loginForm').style.display='none';}
    this.email.current.focus();
  }

  render() {
    return (<div className="App"> 
    {this.state.successmessage}
      <form action="" onSubmit={this.handlerSubmit} method="get" className="App_form"  id="loginForm">      
        <div> <h3>Login</h3>
          <label htmlFor="email">Email : </label>
          <input style={this.state.emailstyle} type="text" name="email" id="email" ref={this.email}  length="20" tabIndex="0"/>          
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input type="password" style={this.state.passwordstyle} name="password" id="password" ref={this.password}  length="20" tabIndex="0"/>          
        </div>      
        <div>
          <button name="add_btn" id="add_btn" tabIndex="2">Submit</button>         
        </div> 
      </form>  
    </div>       
    );
  }
}
 
export default App;