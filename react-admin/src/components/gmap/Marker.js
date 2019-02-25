import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25px;
  height: 25px;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
  color:#333;
  padding:5px 8px 0px 7px ;
`;

export default class Marker extends Component { 
  render () {
    return (
        <Wrapper
            alt={this.props.text}
            {...this.props.onClick ? { onClick: this.props.onClick } : {}}> 
      <div style={{width: 'auto',display:'block', background: '#00a1e1', color: '#333', position:'inherit', padding: '0.3rem'}}>
        {this.props.text}
      </div>
      </Wrapper>
    )
  }
}

Marker.defaultProps = {
    onClick: null,
};
  
Marker.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
};