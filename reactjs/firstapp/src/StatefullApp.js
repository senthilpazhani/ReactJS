import React from 'react';
import ChildStatefull from './Components/ChildStatefull';

class StatefullApp extends React.Component{
    render(){
        return ( <ChildStatefull name="Senthil" dept="Accounts" experience={10} />);
    };
}

export default StatefullApp;