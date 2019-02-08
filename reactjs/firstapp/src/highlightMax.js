import React  from 'react'; 
import './App.css'; 
import styles from './Appcss'; 
 

class App extends React.Component { // Child Component   
  constructor(props){
    super(props);

    this.state= {firstemployee:null,
      firstemployeeexp:null,secondemployee:null, secondemployeeexp:null,higherexp:''}

    this.input1 =React.createRef();
    this.input1exp =React.createRef();
    this.input2 =React.createRef();
    this.input2exp = React.createRef(); 

    this.handlerSubmit = this.handlerSubmit.bind(this);
    
  };
 
  handlerSubmit=(event)=>{event.preventDefault(); 
    var higherexpvalue = (parseInt(this.input1exp.current.value) > parseInt(this.input2exp.current.value)) ? this.input1exp.current.id : this.input2exp.current.id;
    this.setState({
      firstemployee:this.input1.current.value,
      firstemployeeexp:this.input1exp.current.value,
      secondemployee:this.input2.current.value,
      secondemployeeexp:this.input2exp.current.value,
      higherexp:higherexpvalue
    }); 
    this.input1.current.focus();
  }

  render() {
    return (<div className="App"> 
      <form action="" onSubmit={this.handlerSubmit} method="get" className="App_form">
        <div> 
          <label htmlFor="firstemployee">First Employee : </label>
          <input style={this.state.higherexp==='firstemployeeexp'? styles.green:null} type="text" 
          name="firstemployee" id="firstemployee" ref={this.input1} length="20" tabIndex="0"/>
          <input style={this.state.higherexp==='firstemployeeexp'? styles.green:null} type="number" 
          name="firstemployeeexp" id="firstemployeeexp" ref={this.input1exp} length="20" tabIndex="1"/>
        </div>
        <div>
          <label htmlFor="secondemployee">Second Employee : </label>
          <input type="text" style={this.state.higherexp==='secondemployeeexp'? styles.green:null} 
          name="secondemployee" id="secondemployee" ref={this.input2} length="20" tabIndex="0"/>
          <input type="number" style={this.state.higherexp==='secondemployeeexp'? styles.green:null} 
          name="secondemployeeexp" id="secondemployeeexp" ref={this.input2exp} length="20" tabIndex="1"/>
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