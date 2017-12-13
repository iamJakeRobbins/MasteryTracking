import React, { Component } from 'react';
import Header from './Header'
import UserExists from './UserExists'

class Register extends Component {



  render() {
    
    return (
        <div>
        <a href="/"><Header /></a>
        <main className="registerMain">
          <h1>Register An Account</h1>
          
          <form onSubmit={this.props.registerUser}>
            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="name">Name</label>
                <input className="form-control" id ="name" placeholder="Your Name" type="text"
                name="name"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="email">Galvanize Email</label>
                <input required="required" id ="email" className="form-control" placeholder="example@gmail.com" type="email"
                name="email"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="cohort">Galvanize Cohort</label>
                <select className="form-control" name="cohort" id="cohort">
                  <option selected>Choose Your Cohort</option>
                  <option value="1">g64</option>
                  <option value="2">g70</option>
                  <option value="3">g75</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="github">Github URL</label>
                
                <input required="required" id="github_handle" className="form-control" placeholder="http://www.github.com/example <-- just the handle" type="text" />
              
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="linkedin">LinkedIn URL</label>
                <input required="required" id = "linkedin_handle" className="form-control" placeholder="http://www.linkedin.com/in/example <-- just the handle" type="text"
                name="linkedin"/>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="name">Password</label>
                <input required="required" id="password" className="form-control" placeholder="enter password" type="password"
                name="password"/>
              </div>
            </div>

            {/* <div className="row">
              <div className="form-group col-md-4">
                <label className="col-form-label" htmlFor="name">Re-enter Password</label>
                <input required="required" className="form-control" placeholder="enter password" type="password"/>
              </div>
            </div> */}

            <input type="hidden" value="student" id="role"/>

            <button className='registerSubmit btn btn-info' type='submit'>Submit</button>

          </form>
          {this.props.userExists ? <UserExists /> : null}
        </main>
      </div>
    );
  }
}

export default Register;