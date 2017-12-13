import React, { Component } from 'react';

class LoginButtons extends Component {
  render() {
    return (
          <div>
            <button onClick={this.props.toggleForm}className='btn btn-info btn-lg'>Login</button>
            <a href="/register"><button className='btn btn-info btn-lg'>Register</button></a>
          </div>
    );
  }
}

export default LoginButtons;
