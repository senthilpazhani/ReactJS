import React  from 'react'; 
import './App.css'; 
  
const Header = () => {
  return(<div className="App-header">Im Header</div>);
}
const Footer = () => {
  return(<div className="App-footer">Im Footer</div>);
}

const INITIAL_STATE = {firstname:'',
lastname:'',
address:'',
checkindate:'',
checkoutdate:'',
adult:'',
children:'',
noofperson:0,
foodservice:'0',
country:''}

class App extends React.Component { // Child Component   
  constructor(props){
    super(props); 
    
    this.state=INITIAL_STATE;  

    this.handlerOnChange = this.handlerOnChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    
  };

  handlerOnChange(event){
    const target = event.target;
    const value = target.type==='checkbox' ? target.checked : target.value; 
    const name = target.name;  
    this.setState({
        [name]:value
    }); 
  }

  handlerSubmit(event){event.preventDefault(); 
    var alertMsg = `On submission one alert should be displayed
    Thank you !!
    Your details are
    Name: ${this.state.firstname + this.state.lastname}
    Address : ${this.state.address}
    Your booking Dates between ${this.state.checkindate} and ${this.state.checkoutdate}
    No of persons : ${this.state.noofperson}
    Adult : ${this.state.adult} and Children : ${this.state.children}
    Food service : ${ (this.state.foodservice==='0') ? 'Required':'Not Required' }
    Country : ${this.state.country}`;
    console.log(alertMsg);
    
  }

  onResetArray = (e) => {
    e.preventDefault();
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (<div className="App">
      <Header />      
      <form onSubmit={this.handlerSubmit} method="get" className="App_form">
        <div>
          <div><label htmlFor="firstname">First Name : </label>
          <input type="text" name="firstname" id="firstname" value={this.state.firstname} length="20" tabIndex="0"
          onChange={this.handlerOnChange} /></div>
          <div><label htmlFor="lastname">Last Name : </label>
          <input type="text" name="lastname" id="lastname" value={this.state.lastname} length="20" tabIndex="1" 
          onChange={this.handlerOnChange} /></div>
          <div><label htmlFor="address">Address : </label>
          <textarea type="text" name="address" id="address" value={this.state.address} rows="5" tabIndex="1" 
          onChange={this.handlerOnChange} /></div>
        </div>      
        <div>
          <div><label htmlFor="checkindate">Check In Date : </label>
          <input type="date" name="checkindate" id="checkindate" value={this.state.checkindate} length="20" tabIndex="0"
          onChange={this.handlerOnChange} /></div>
          <div><label htmlFor="checkoutdate">Check out Date : </label>
          <input type="date" name="checkoutdate" id="checkoutdate" value={this.state.checkoutdate} length="20" tabIndex="0"
          onChange={this.handlerOnChange} /></div>
          <div><label htmlFor="checkoutdate">Adult : </label>
          <input type="checkbox" name="adult" id="adult" value={this.state.adult} length="20" tabIndex="0"
          onChange={this.handlerOnChange} /></div>
          <div><label htmlFor="checkoutdate">Children : </label>
          <input type="checkbox" name="children" id="children" value={this.state.children} length="20" tabIndex="0"
          onChange={this.handlerOnChange} /></div>
          <div><label htmlFor="noofperson"># of Persons : </label>
          <input type="number" name="noofperson" id="noofperson" value={this.state.noofperson} length="20" tabIndex="0"
          onChange={this.handlerOnChange} /></div>
          <div><label htmlFor="foodservice">Food Servide : </label>
          <input type="radio" checked={this.state.foodservice==='0'} name="foodservice" id="foodservice1" value="0" length="20" tabIndex="0"
          onChange={this.handlerOnChange} />Required
          <input type="radio" checked={this.state.foodservice==='1'} name="foodservice" id="foodservice2" value="1" length="20" tabIndex="0"
          onChange={this.handlerOnChange} />Not Required</div>
          <div><label htmlFor="country">Country : </label>
          <select type="text" name="country" id="country" value={this.state.country} length="20" tabIndex="0"
          onChange={this.handlerOnChange} >
          <option value="-">Select</option>
          <option value="0">India</option>
          <option value="1">UK</option>
          <option value="2">US</option>
          </select></div>
        </div>
        <div><button name="add_btn" id="add_btn" tabIndex="2">Submit</button> 
        <button type="reset" name="add_btn" id="add_btn" onClick={this.onResetArray} tabIndex="2">Reset</button></div> 
      </form> 
      <Footer /></div>       
    );
  }
}
 
export default App;