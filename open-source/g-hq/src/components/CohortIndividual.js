import React, { Component } from 'react';


class CohortIndividual extends Component {
  
  
  render() {
    console.log(this.props.data)
    return (
          <div className='cohortMembers'>
            <h4>{this.props.name}</h4>
            <p>{this.props.email}</p>
            <p>Github:<a href= {`https://www.github.com/${this.props.github_handle}`} target="blank">{this.props.github_handle}</a></p>
            <p>LinkedIn:<a href={`https://www.linkedin.com/in/${this.props.linkedin_handle}`} target="blank">{this.props.linkedin_handle}</a></p>
          </div>
    );
  }
}

export default CohortIndividual;