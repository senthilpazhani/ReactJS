import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import StatelessApp from './StatelessApp';
// import StatefullApp from './StatefullApp';
//import EmployeeProfile from './EmployeeProfile';
//import ControlledComponents from './controlledComponents';
//import Refsjs from './refs';
//import Todolist from './todoList';
//import Highlight from './highlightMax';
//import Login from './refslogin';
//import AddItemToArray from './addItemToArray';
//import UpdateItemToArray from './updateItemToArray';
//import ManageObject from './manageObject';
//import Checkbox from './checkbox';
//import Form from './formSubmit';
//import Form from './formExample';
//import Form from './ConditionalRendering';
//import Form from './onOff';
//import Form from './ToDoListEnhanced';
//import App from './formSubmissionWithReact';
import App from './ForcedUpdate';

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App myName="Senthil" />, document.getElementById('root'));
ReactDOM.render(<App  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
serviceWorker.unregister();
