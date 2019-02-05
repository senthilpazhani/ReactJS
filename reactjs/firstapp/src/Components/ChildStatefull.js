import React from 'react'; 

class StatefullApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            btnText:'Click Me !',
            btnIncrement:"Increment",
            btnDecrement:"Decrement",
            experience:this.props.experience,
        };
        this.handleIncrement=this.handleIncrement.bind(this);
        this.handleDecrement=this.handleDecrement.bind(this);
    }
    handleIncrement(){
        this.setState({experience:this.state.experience+1});
    }
    handleDecrement(){
        this.setState({experience:this.state.experience-1});
    }
    render(){
        return ( <p>{this.props.name} | {this.props.dept} | {this.state.experience}<br/>
        <button onClick={()=>alert('hi')}>{this.state.btnText}</button>
        <button onClick={this.handleIncrement}>{this.state.btnIncrement}</button>
        <button onClick={this.handleDecrement}>{this.state.btnDecrement}</button></p>);
    };
}

export default StatefullApp;