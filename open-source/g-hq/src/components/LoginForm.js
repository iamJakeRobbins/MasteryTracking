import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
          <div>
            <form action="" onSubmit={this.props.userInput}>
              <label htmlFor="email">Email</label>
              <input id='email' required='required' name='email' type="email"/>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name='password' required='required'/>
              <button className='btn btn-info btn-lg'>Submit</button>
            </form>
            <p>Don't have an account? Register <a href="/register">HERE</a></p>
          </div>
    );
  }
}

export default LoginForm;
