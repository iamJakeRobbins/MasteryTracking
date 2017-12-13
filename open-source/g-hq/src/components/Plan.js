import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Plan extends Component {

  render() {
    return(

       typeof this.props.oneDaily == 'string' ? <h4>{this.props.oneDaily}</h4> : <ReactMarkdown source={this.props.oneDaily.plan} allowTypes={['breaks']}/>
    )
  }
}

export default Plan
