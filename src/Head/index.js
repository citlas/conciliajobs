import React, { Component } from 'react';
import Menu from '../Menu/'

class Head extends Component {
  
  render() {
    return (
        <div className="head">
          
          <Menu  /> 
          <h1>Concilia Jobs</h1>
          <h2>El sitio para encontrar el trabajo que te permite conciliar</h2>
          
                  
        </div>

        
    
    );
  }
}

export default Head;