import React, { Component } from 'react';

class UserExists extends Component {
  render() {
    return (
          <div>
            <p>That email has already been registered! Please choose a different email or <a href="/">LOGIN</a></p>
          </div>
    );
  }
}

export default UserExists;