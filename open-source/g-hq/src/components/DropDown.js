import React, { Component } from 'react';
import cookie from 'react-cookies'


class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: cookie.load('userInfo'),
    }
  }

  findFirstLetter() {
    return this.state.signedIn.name.charAt(0)

  }

  render() {
    return (
      // console.log(this.props.user);
      <div>
         <div className="dropdown">
           <button className="dropbtn"><h1 id="userFirstLetter">{this.findFirstLetter()}</h1><i className="fa fa-sort-desc" aria-hidden="true"></i></button>
           <div className="dropdown-content">
            <a onClick={this.props.toggleEditUser}className="topLink" href="#">Edit Profile</a>
            <a onClick={this.props.toggleCohort} href="#">Cohort</a>
            <a href="https://members.galvanize.com/" target="_blank">Members Portal</a>
            <a href="https://talent.galvanize.com/" target="_blank">Talent Portal</a>
            <a href="https://learn.galvanize.com/" target="_blank">Learn Curriculum</a>
            <a href={`https://www.linkedin.com/in/${this.props.user.linkedin_handle
            }`} target="_blank">LinkedIn</a>
            <a href={`https://github.com/${this.props.user.github_handle
            }`} target="_blank">Github</a>
            <a href="#">Student Links</a>
            <a className="bottomLink" href="#"><i className="fa fa-plus" aria-hidden="true"></i> Add Link</a>
           </div>
        </div>
      </div>
    )
  }
}

export default DropDown;
