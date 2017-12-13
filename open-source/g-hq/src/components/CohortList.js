import React, { Component } from 'react';
import CohortIndividual from './CohortIndividual'

class CohortList extends Component {
  
  
  render() {
    return (
          <div>
            <h1>Cohort</h1>
          {this.props.data.map((x => 
        <CohortIndividual
          key= {x.id}
          name= {x.name}
          email = {x.email}
          github_handle= {x.github_handle}
          linkedin_handle={x.linkedin_handle}
      />
    ))}
          </div>
    );
  }
}

export default CohortList;