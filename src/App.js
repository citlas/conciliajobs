import React, { Component } from 'react';
import './main.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Detail from './Detail';
import Faq from './Faq';
import Contacto from './Contacto';
//import firebase from 'firebase';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
   

  }

    
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/detail" exact component={Detail} />
          <Route path="/contacto" exact component={Contacto} />
        </div>
      </Router>
    );
  }
}

export default App;
