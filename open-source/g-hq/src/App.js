import React, { Component } from 'react';
import logo from './g.png';
import './App.css';
import LandingPage from './components/LandingPage'
import Register from './components/Register'
import HqPage from './components/HqPage'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import cookie from 'react-cookies'

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    data: [],
    loggedIn: false,
    user: [],
    userCreated: false,
    loginSuccess: false,
    userExists: false,
    cookies: cookie.loadAll(),
    signedIn: cookie.load('userInfo'),
    fireRedirect: false
    }
  }

  async putItem(item) {
    const response = await fetch(`https://radiant-depths-28199.herokuapp.com/api/hq/${this.state.user.id}`, {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    cookie.save('userInfo', item, { path: '/' })
    console.log(this.state.fireRedirect)
    this.setState({
      user: item,
      fireRedirect: true
    })
    console.log(this.state.fireRedirect)
  }

  onLogout() {
    cookie.remove('userInfo', { path: '/' })

  }

  async componentDidMount() {
    const response = await fetch('https://radiant-depths-28199.herokuapp.com/api/users')
    const json = await response.json()
    this.setState({data: json})
  }

  async createItem(item) {
    const response = await fetch('https://radiant-depths-28199.herokuapp.com/api/users/new', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.componentDidMount()
    this.setState({userCreated: true})
    this.setState({loginSuccess: true})
    
  }

  async postMastery(item) {
    const response = await fetch('https://radiant-depths-28199.herokuapp.com/api/mastery_tracking/submissions', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
  }

  addMastery(e) {
    e.preventDefault();
    let item= {
      user_id: e.target.user_id.value,
      domain: e.target.domain.value,
      standard: e.target.standard.value,
      demonstration: e.target.demonstration.value
    }
    this.postMastery(item)
  }

  editUser(e) {
    e.preventDefault();
    let item = {
      id: e.target.id.value,
      name: e.target.name.value,
      email: e.target.email.value,
      cohort: e.target.cohort.value,
      github_handle: e.target.github_handle.value,
      linkedin_handle: e.target.linkedin_handle.value,
      password: e.target.password.value,
      role: e.target.role.value
    }
    this.putItem(item)
  }


  registerUser(e) {
    e.preventDefault();
    let item = {
      name: e.target.name.value,
      email: e.target.email.value,
      cohort: e.target.cohort.value,
      github_handle: e.target.github_handle.value,
      linkedin_handle: e.target.linkedin_handle.value,
      password: e.target.password.value,
      role: e.target.role.value
    }
    var count = 0;
    for (var i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].email == item.email) {
        count ++
      }
    }
   if (count > 0) {
   this.setState({userExists: true})
    }
    else { this.createItem(item) }
  }

  loginCheck(e) {
     e.preventDefault()
     let userData = {
       email: e.target.email.value,
       password: e.target.password.value,
     }
     let userDailyPlans = []

     for (var i = 0; i < this.state.data.length; i++) {
       if(this.state.data[i].email === userData.email && this.state.data[i].password === userData.password) {
         // console.log('success!')
         // console.log(userData);
         this.setState({ userCreated: false,
           user: this.state.data[i]}, () => {
           // console.log(this.state.user);
           cookie.save('userInfo', this.state.user, { path: '/' })
           this.setState({ signedIn: cookie.load('userInfo')})
           this.setState({
             loggedIn: true
          })
         })

       }
     }
  }

  async meetupApiMount() {
    const response = await fetch('https://api.meetup.com/find/upcoming_events?key=603d4e54316249506c5935491e2f3f55')
    const json = await response.json()
    this.setState({data: json})
    // console.log(this.state.data)
  }


  render() {
    // console.log(this.state.signedIn);
    // console.log(this.state.loggedIn);

    return (
    <Router>
      <div>
          <Route exact path={"/"} render={(props) => ( this.state.loggedIn || this.state.signedIn !== undefined ? (<Redirect to={`/hq/${this.state.signedIn.id}`} />) : ( <LandingPage data={this.state.data} loginSuccess={this.state.loginSuccess} userInput={this.loginCheck.bind(this)} />)
          )} />
          <Route path={"/register"} render = {(props) => ( this.state.userCreated ? (<Redirect to={'/'} />) : ( <Register userExists={this.state.userExists} componentDidMount= {this.componentDidMount.bind(this)} registerUser = {this.registerUser.bind(this)} />)
          )} />
          <Route path={"/hq/:id"} render={(props) => ( <HqPage
          addMastery = {this.addMastery.bind(this)}
          redirect={this.state.fireRedirect} user={this.state.user} onLogout={this.onLogout} loggedIn={this.state.loggedIn}  editUser={this.editUser.bind(this)} />)} />
      </div>
    </Router>
    );
  }
}

export default App;
