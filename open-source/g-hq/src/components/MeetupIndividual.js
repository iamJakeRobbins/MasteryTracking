import React, { Component } from 'react';

class MeetupIndividual extends Component {
  render() {
    
    return (
          <div className='cohortMembers'>
            
            <h2>{this.props.eventName}</h2>
            <h4>Group: {this.props.groupName}</h4>
            <p>Date: {this.props.date}</p>
            <p>Time: {this.props.time}</p>
          </div>
    );
  }
}

export default MeetupIndividual;