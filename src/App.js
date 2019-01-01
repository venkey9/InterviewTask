import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Register from './modules/Register';
import project from './modules/project';
import Login from './modules/Login';
import projectview from './modules/projectview';
import Routes from './routes';
import './App.css';
import {BrowserRouter,  Switch} from 'react-router';
import {browserHistory ,browserRouter, history}from 'react-router';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
        <div className="App__Form">

        <Route exact path='/' component={Register}/>
        
        <Route path='/Login' component={Login}/>
                
        <Route path='/project' component={project}/>
        
        <Route path="/projectview/:id" component={projectview} />
        
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
