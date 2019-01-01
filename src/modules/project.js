import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import { HashRouter as NavLink, Router, Route, Link } from 'react-router-dom';
import projectview from './projectview';
 import {browserHistory as history}from 'react-router';

class Project extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        name:'',
        data:'',
        description:'',
        posts:[],
             }

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
    };

    onChange(e) {
      this.setState({ 
        [e.target.name]: e.target.value
       });
    }
    onSubmit(e){
      e.preventDefault();
      var _this = this;
      fetch('http://localhost:3000/posts/',{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:_this.state.name,
        data:_this.state.data,
        description:_this.state.description,
      })
    })
      .then(function(response){
        return response.json();
        })
         .then(function(body){
          console.log(body)
  
  })
    this.setState({
            name:'',
            data:'',
            description:'',
          })
}

  componentDidMount(){
    fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
    .then(data=>{
      let posts = data.map(index=>{
        return (
          
          <div key={index}>
   
      <Link to={'/projectview/:id'}><p>{index.id}.{index.description}</p></Link> 
          </div>
          )
      }) 
      this.setState({posts:posts});
    })
  }
  render() {
    return (
      <div>
      <div className="container">
      <div className="row">
      <div className="col-6">
      <h2><u>Project Page</u></h2><br/>
       <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.onSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="name">project name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter project Name" 
                name="name" value={this.state.name} style={{"width":"45%"}} onChange={this.onChange} />
              </div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="name">peoject Data</label>
                <input type="text" id="Data" className="FormField__Input" placeholder="Enter project Data"
                 name="data" style={{"width":"45%"}} value={this.state.data} onChange={this.onChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">peoject description</label>
                <input type="textarea" id="description" className="FormField__Input" placeholder="Enter project description" 
                name="description" style={{"width":"45%"}} value={this.state.description} onChange={this.onChange} />
              </div>

              <div className="FormField">
              <button className="FormField__Button mr-20" >Add Project</button>
              </div>
            </form>
          </div>
                 <div className="col-6">
            <h3><u>All Projects</u></h3>          
                 <div className="list">
         {this.state.posts}
          </div>
                 <div>

   </div>
      </div>
 </div>
       </div>
    </div>
   );
  }


}


export default Project;