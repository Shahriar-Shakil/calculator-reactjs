import React, { Component } from 'react';
class Screen extends React.Component{
  
    render(){
      return(
        <div id="display">
        {this.props.currentNumber}
        </div>
      )
    }
  }
  export default Screen;