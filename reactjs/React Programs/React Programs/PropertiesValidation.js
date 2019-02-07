import React from 'react';
import PropTypes from "prop-types";


class App extends React.Component {
   render() {
      const child=this.props.propElement;
      
      return (
         
         <div>
            <h3>Array: {this.props.propArray}</h3>
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
            <h3>Object: {this.props.propObject.objectName1}</h3>
            <h3>Object: {this.props.propObject.objectName2}</h3>
            <h3>Object: {this.props.propObject.objectName3}</h3>
            <h3>PropMulti: {this.props.propMulti}</h3>
            <h3>PropAny: {this.props.propAny}</h3>
            <h3>Object1 Name: {this.props.propObject1.name}</h3>
            <h3>Object1 department: {this.props.propObject1.dept}</h3>
            <h3>Object1 designation: {this.props.propObject1.desig}</h3>
            <h3>Object1 company: {this.props.propObject1.company}</h3>
            <h3>PropElement: {child}</h3>
            {this.props.propElement}
           
         </div>
      );
   }
}

App.propTypes = {
   propArray: PropTypes.array.isRequired,
   propArray: PropTypes.arrayOf(PropTypes.number),

   propBool: PropTypes.bool.isRequired,
   propFunc: PropTypes.func,
   propNumber: PropTypes.number,
   propString: PropTypes.string,
   propString: PropTypes.oneOf(['News', 'Photos']),
   propObject: PropTypes.object,
   propObject: PropTypes.objectOf(PropTypes.number),
   propObject1: PropTypes.exact({
      name: PropTypes.string,
      dept: PropTypes.string,
      desig: PropTypes.string,
      age: PropTypes.string.number
    }),
    /*propObject1: PropTypes.exact({
      name: PropTypes.string,
      dept: PropTypes.string,
      desig: PropTypes.string,
      age: PropTypes.string.number
    }),*/
   propMulti: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      
    ]),
   propAny: PropTypes.any.isRequired,
   propElement:PropTypes.element.isRequired
  
   

}

App.defaultProps = {
   propArray: [1,2,3,4,5],
   propBool: true,
   propFunc: function(e){return e},
   propNumber: 1,
   propString: "News",
   propObject: {
      objectName1:"objectValue1",
      objectName2: "objectValue2",
      objectName3: "objectValue3"
   },
   propMulti:12,
   propAny:'ABC',
   propObject1: 
      {name:"Neetu", dept:"L&D",desig:"AM", company:"CSSCorp"},
  
    
}
export default App;