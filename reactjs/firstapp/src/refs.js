import React  from 'react'; 
import './App.css'; 
 
const inital_state = {firstname:'',
  lastname:'',address:''};

class App extends React.Component {  
  constructor(props){
    super(props);  

    this.state = inital_state;

    //using createRef()  
    this.input = React.createRef();
    //using Call Back Method
    this.callBackmethod = element => {this.textInput = element  }

    this.handlerOnChange = this.handlerOnChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerReset = this.handlerReset.bind(this);
    
  };

  handlerOnChange(event){  
    this.setState({
      firstname:this.input.current.value, //using createRef()  
      lastname:this.refs.lastnameref.value,  //using String Name
      address:this.textInput.value//using Call Back Method
    });

  }
  handlerSubmit=(event)=>{event.preventDefault(); 
    this.setState({
      firstname:this.input.current.value+ ' submit', //using createRef()  
      lastname:this.refs.lastnameref.value + ' submit', //using String Name
      address:this.textInput.value + ' submit'//using Call Back Method
    });
    this.input.current.focus();
  }

  handlerReset=(event)=>{event.preventDefault(); 
    this.setState({...inital_state});
  }

  render() {
    return (<div className="App"> 
      <form action="" method="get" className="App_form">
        <div>
          <div><label htmlFor="firstname">First Name : </label>
          {/* //using createRef()   */}
          <input type="text" name="firstname" id="firstname" ref={this.input} value={this.state.firstname} length="20" tabIndex="0"
           onChange={this.handlerOnChange} />{this.state.firstname}</div>
          <div><label htmlFor="lastname">Last Name : </label>
          {/* //using String Name   */}
          <input type="text" name="lastname" id="lastname" ref="lastnameref" value={this.state.lastname} length="20" tabIndex="1" 
          onChange={this.handlerOnChange} />{this.state.lastname}</div>
          <div><label htmlFor="address">Address : </label>
          {/* //using Call Back Method   */}
          <textarea type="text" name="address" id="address" ref={this.callBackmethod} value={this.state.address} rows="5" tabIndex="1" 
          onChange={this.handlerOnChange} />{this.state.address}</div>
        </div>       
        <div><button name="add_btn" id="add_btn" onClick={this.handlerSubmit} tabIndex="2">Submit</button> 
        <button type="reset" name="add_btn" id="add_btn"  onClick={this.handlerReset}  tabIndex="2">Reset</button></div> 
      </form>  
    </div>       
    );
  }
}
 
export default App;