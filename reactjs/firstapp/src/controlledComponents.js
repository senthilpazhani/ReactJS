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

    this.state={  profile:[{firstname:'',
    lastname:'',
    address:'',
    checkindate:'',
    checkoutdate:'',
    noofperson:0,
    foodservice:true,
    country:''}] }; 
    // this.state={firstname:'',
    // lastname:'',
    // address:''}; 
    this.handlerOnChange = this.handlerOnChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    
  };

  handlerOnChange(event){
    const target = event.target;
   // const value = target.value.toUpperCase();
   // const checked = target.type==='checkbox' ? target.checked : '';
  //  const name = target.name; 
    // this.setState({
    //     [name]:value
    // });
    this.setState({
        //profile:this.profile
    });
  }

  handlerSubmit(event){event.preventDefault(); console.log(this.state.profile);}

  render() {
    return (<div className="App">
      <Header />      
      <form action="" method="get" className="App_form">
        <div>
          <div><label htmlFor="firstname">First Name : </label>
          <input type="text" name="firstname" id="firstname" value={this.state.profile[0].firstname} length="20" tabIndex="0"
          onChange={this.handlerOnChange} /></div>
          <div><label htmlFor="lastname">Last Name : </label>
          <input type="text" name="lastname" id="lastname" value={this.state.profile[0].lastname} length="20" tabIndex="1" 
          onChange={this.handlerOnChange} /></div>
          <div><label htmlFor="address">Address : </label>
          <textarea type="text" name="address" id="address" value={this.state.profile[0].address} rows="5" tabIndex="1" 
          onChange={this.handlerOnChange} /></div>
        </div>      
        <div>
          <div><label htmlFor="checkindate">Check In Date : </label>
          <input type="date" name="checkindate" id="checkindate" value={this.state.profile[0].checkindate} length="20" tabIndex="0"
          onChange={this.handlerOnChange} /></div>
          <div><label htmlFor="checkoutdate">Check out Date : </label>
          <input type="date" name="checkoutdate" id="checkoutdate" value={this.state.profile[0].checkoutdate} length="20" tabIndex="0"
          onChange={this.handlerOnChange} /></div>
          <div><label htmlFor="noofperson"># of Persons : </label>
          <input type="number" name="noofperson" id="noofperson" value={this.state.profile[0].noofperson} length="20" tabIndex="0"
          onChange={this.handlerOnChange} /></div>
          <div><label htmlFor="foodservice">Food Servide : </label>
          <input type="checkbox" checked={this.state.profile[0].foodservice} name="foodservice" id="foodservice" value="seafood" length="20" tabIndex="0"
          onChange={this.handlerOnChange} /></div>
          <div><label htmlFor="country">Country : </label>
          <select type="text" name="country" id="country" value={this.state.profile[0].country} length="20" tabIndex="0"
          onChange={this.handlerOnChange} >
          <option value="-">Select</option>
          <option value="0">India</option>
          <option value="1">UK</option>
          <option value="2">US</option>
          </select></div>
        </div>
        <div><button name="add_btn" id="add_btn" onClick={this.handlerSubmit} tabIndex="2">Submit</button> 
        <button type="reset" name="add_btn" id="add_btn"  tabIndex="2">Reset</button></div> 
      </form> 
      <Footer /></div>       
    );
  }
}
 
export default App;