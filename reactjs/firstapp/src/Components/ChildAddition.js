import React from 'react';

class ChildAddition extends React.Component{
    render(){
        return (
            <div>Addition of {this.props.val1} and {this.props.val1} is {this.props.val1 + this.props.val2}</div>
        );
    };
}

export default ChildAddition;