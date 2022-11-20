import React, { Component } from 'react'

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
       name:"",
       bio:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name,bio }=this.state;
    console.log(name,bio);
    fetch("http://localhost:5000/register", {
      method : "POST" ,
      crossDomain : true ,
      headers: {
        "Content-Type":"application/json",
      Accept: "application/json",
      "Access-Control-Origin":"*"
  },
  body: JSON.stringify({
    name,
    bio,
    }),
  })
     .then((res) => res.json())
     .then((data) => {
      console.log(data,"userRegister");
     });

    }
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label> name</label>
          <input
            type="text"
            className="form-control"
            placeholder=" name"
            onChange={(e)=>this.setState({name : e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>bio</label>
          <input type="text" className="form-control" placeholder="Bio" />
          onChange={(e)=>this.setState({bio : e.target.value})}
        </div>

          <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
       
       </form>
    )
  }
}