import React from 'react';

class App extends React.Component {
   
   forceUpdateHandler() {
      this.forceUpdate();
   };

   render() {
      return (
         <div>
            <button onClick = {this.forceUpdateHandler.bind(this)}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
         </div>
      );
   }
}

export default App;