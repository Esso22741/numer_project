import React from 'react';
import { Component } from 'react';
import Example from './Menubar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Bi from './RootOfEquation/Bi';
import Npage from './Npage';
import NewTon from './RootOfEquation/NewTon';
import OneP from './RootOfEquation/OneP';
class App extends Component {
  
  render(){
     return (
       <Router>
          <Example />
          <Route exact path = "/"><Npage/></Route>
          <Route path = "/bisection"><Bi/></Route>
          <Route path = "/newtonrapson"><NewTon/></Route>
          <Route path = "/onepointiteration"><OneP/></Route>
       </Router>
        
         
    );
  }
 
}

export default App;
