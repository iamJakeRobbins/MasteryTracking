import React, { Component } from 'react';

class CareerServices extends Component {


  async postCareerServices(item) {
    const response = await fetch('https://radiant-depths-28199.herokuapp.com/api/career_services/submissions', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    
  }

  addCareerServices(e) {
    e.preventDefault();
    let item= {
      user_id: e.target.user_id.value,
      doc_type: e.target.doc_type.value,
      link: e.target.link.value
    }
    this.postCareerServices(item)
  }




  render() {
    return (
          <div>
            <h1>Career Services</h1>
              <form onSubmit={this.addCareerServices.bind(this)} >
              {/* <label className="col-form-label" htmlFor="name">Name</label> */}
              <input required='required' className="form-control" id ="user_id" value={this.props.user.id} type="hidden"
              name="name"/>

              <label className="col-form-label" htmlFor="fileType">What kind of document are you sending?</label>
              <input required='required' className="form-control" id ="doc_type" type="text"/>

              <label className="col-form-label" htmlFor="link">Please add your document link below (resume, cover letter, etc.):</label>
              <input required='required'className="form-control" id ="link" type="text"/>
              <button className='registerSubmit btn btn-info' type='submit'>Submit</button>
            </form>
          </div>
    );
  }
}

export default CareerServices;