import React from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Menu(){
 
  
  return (  
    <menu className="top">  

      <div className="content">  
        <ul className="menu">
          <li className="menuItem"><a href="#home">Home</a></li>
          <li className="menuItem"><a href="#faq">FAQ</a></li>
          <li className="menuItem"><a href="#contacto">Contacto</a></li>
        </ul>
        
      </div>
    </menu>    
  );
}

export default Menu;