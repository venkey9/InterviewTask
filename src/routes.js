import React from 'react';
import { Route,Router, Link} from 'react-router-dom';
import Register from './modules/Register';
import project from './modules/project';
import Login from './modules/Login';
import projectview from './modules/projectview';
import {browserHistory , history} from 'react-router';

const Routes = () => (
<Router >

              <div className="FormTitle">
              <Link to="/Login" activeClassName="active" className="Title">Login</Link> or 
              <Link exact to="/" activeClassName="active" className="Title">Sign Up</Link>
              </div>
              <Route exact path='/' component={Register}/>
              
              <Route path='/Login' component={Login}/>
             
              <Route path='/project' component={project}/>
              
                        <Route path='/projectview' component={projectview}/>
        
      </Router>

);



export default Routes;