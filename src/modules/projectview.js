import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class projectview extends React.Component {
    constructor() {
      super();
      this.state = {
        customername:'',
        customerphone:'',
        customeremail:'',
        customer:[],
        
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
      fetch('http://localhost:3000/customer',{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customername:_this.state.customername,
        customerphone:_this.state.customerphone,
        customeremail:_this.state.customeremail,
      })
    })
      .then(function(response){
        return response.json();
        })
         .then(function(body){
          console.log(body)
  
  })
    this.setState({
            customername:'',
            customerphone:'',
            customeremail:'',
          })
}
  componentDidMount(){
    fetch('http://localhost:3000/customer')
    .then(resp => resp.json())
    .then(data=>{
      let customer = data.map(index=>{
        return (
          <div>

          <div key={index}>
          <tr><th>{index.id}</th>
          <th className="name">{index.customername}</th>
          <th className="no">{index.customerphone}</th>
          <th className="mail">{index.customeremail}</th>
          </tr> 
          
          </div>
  </div>        )
      }) 
      this.setState({customer:customer});
    })
  }
  render() {
 
    return (
      <div>
      <div className="container">
      <div className="row">
      <div className="col-6">
      <h2><u>Project Detailed View</u></h2>
      <br/>

       <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.onSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="name">customer name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter customer Name" 
                name="customername" style={{"width":"45%"}} value={this.state.customername} onChange={this.onChange} />
              </div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="name">customer phone</label>
                <input type="phone" id="phone" className="FormField__Input" placeholder="Enter customer number"
                 name="customerphone" value={this.state.customerphone} style={{"width":"45%"}} onChange={this.onChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">customer email</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter customer email" 
                name="customeremail" value={this.state.customeremail} onChange={this.onChange} style={{"width":"45%"}} />
              </div>

              <div className="FormField">
              <button className="FormField__Button mr-20" >Add Project</button>
              </div>
            </form>
          </div>
                 <div className="col-6">
                 <h3><u>All customers</u>({this.state.customer.length})</h3>
                
                 <div className="list">
           <tr> 
          <th className="th">Cname</th>
          <th className="th">Cphone</th>
          <th className="th">Cemail</th>
          </tr>
          <br/>
        {this.state.customer}
                </div>
                
      </div>
 </div>
       </div>
    </div>
   );
  }


}


export default projectview;