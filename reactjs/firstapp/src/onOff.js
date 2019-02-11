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

    this.state={caption:true};  
 
    this.handlerClick = this.handlerClick.bind(this);
    
  };
   
  handlerClick(event){event.preventDefault();
    this.setState({
      caption:!this.state.caption,
    });
  }

  render() {
    return (<div className="App">
      <Header />      
      <form   className="App_form">
      <button name="add_btn" id="add_btn" tabIndex="2" onClick={this.handlerClick}>
      {(this.state.caption)?"ON":"OFF"}</button> 

      </form>  
      <Footer />
      </div>       
    );
  }
}
 
export default App;