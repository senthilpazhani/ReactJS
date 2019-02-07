import React from 'react';

class NewApp extends React.Component {
   constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ],
         header:"React Application"
      }
      this.changeHeader=this.changeHeader.bind(this);
   }
   changeHeader =(param) =>
   {
      this.setState({header:"Header Changed"})
   }
   render() {
      return (
         <div>
            <Header message={this.state.header} change={this.changeHeader}/>
            <table border="1">
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.message}</h1>
            <button onClick={this.props.change}>Change Header</button>
         </div>
      );
   }
}
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}
export default NewApp;