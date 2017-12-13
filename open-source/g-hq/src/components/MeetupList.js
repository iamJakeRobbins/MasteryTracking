import React, { Component } from 'react';
import MeetupIndividual from './MeetupIndividual'

class MeetupList extends Component {
  render() {
    console.log(this.props)        
  return (
    <div>
    <h1>Upcoming Tech-Related Meetups</h1>
      {this.props.meetups.map((x => 
        <MeetupIndividual
          key= {x.id}
          eventName = {x.name}
          groupName = {x.group.name}
          date = {x.local_date}
          time = {x.local_time}
          
      />
    ))}
    </div>
    )
  }
}

export default MeetupList;