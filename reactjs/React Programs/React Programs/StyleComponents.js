import React from 'react';
import '../CSS/StyleSheet.css';
import styles from '../CSS/StyleSheetModule';
import styled from 'styled-components';

class StyleComponent extends React.Component {
    constructor(props)
    {
        super(props)
        {
            
        }
        this.state={name:this.props.name}
    }
    render() {
        const divStyle = {
            fontSize: 42,//camelCased
            margin: '40px',
            border: '5px solid pink'
          };
          const Paragraph = styled.p`
                            font-size: 47px;
                            text-align: center;
                        `;

       return (
           <div>
          <div className='DottedBox'>
             <h2>Stateful Component</h2>
             <p className='DottedBox_content'>My name is {this.state.name}</p>
             
          </div>
          <div style={divStyle}>New Division</div>
          <div style={styles.Container}>New Division</div>
          <div style={styles.Container1}>New Division</div>
          <Paragraph>My new style</Paragraph>
          </div>
       );
    }
  }
  export default StyleComponent;