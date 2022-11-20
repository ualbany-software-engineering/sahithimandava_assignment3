import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter name"
          />
        </div>

        <div className="mb-3">
          <label>Bio</label>
          <input
            type="bio"
            className="form-control"
            placeholder="Enter Bio"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
       
      </form>
    )
  }
}