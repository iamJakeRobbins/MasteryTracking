import React, { Component } from 'react';
import CohortList from './CohortList'

class Cohort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cohortData: []
      }
    }

    async componentDidMount() {
      const response = await fetch(`https://radiant-depths-28199.herokuapp.com/api/cohorts/users/1`)
      const json = await response.json()
      this.setState({cohortData: json})
    }
  
  render() {
    console.log(this.state.cohortData)
    return (
          <div>
            <CohortList data={this.state.cohortData} />
          </div>
    );
  }
}

export default Cohort;