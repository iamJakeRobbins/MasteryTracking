import React, { Component } from 'react';
import MeetupList from './MeetupList'
// import MeetupIndividual from './MeetupIndividual'


class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    const response = await
    fetch('https://galvanize-cors.herokuapp.com/https://api.meetup.com/find/upcoming_events?key=603d4e54316249506c5935491e2f3f55')
    const json = await response.json()
    this.setState({data: json.events})
    
  }


  
  
  render() {
    return (
        <div>
        <MeetupList meetups= {this.state.data} />  
        </div>
    );
  }
}

export default Meetup;
