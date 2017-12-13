import React, { Component } from 'react';
import LoginForm from './LoginForm'
import LoginButtons from './LoginButtons'
import logo from '../g1.png';
import LoginSuccess from './LoginSuccess'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: true,
      form: false
    }
  }

  toggleForm(e) {
    if (this.state.buttons === true) {
      this.setState({buttons: false})
    } else {
      this.setState({form: true})
    }
  }

  render() {
    // console.log(this.props.data);
    return (
        <div>
          <main className="landingMain">
           <img src={logo} class='logo' alt="logo" />
            <h1 >A portal for gStudents</h1>
            {this.props.loginSuccess ? <LoginSuccess /> : null}
            {this.state.buttons ?   <LoginButtons toggleForm={this.toggleForm.bind(this)}
            /> : <LoginForm  userInput={this.props.userInput} />}
          </main>
        </div>
    );
  }
}

export default LandingPage;
