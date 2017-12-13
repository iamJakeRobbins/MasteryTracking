import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Plan from './Plan.js'

class DailyPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daily: [],
      userDaily: [],
      oneDaily: [],
    }
  }

  async componentDidMount() {
    const response = await fetch('https://radiant-depths-28199.herokuapp.com/api/daily')
    const json = await response.json()
    this.setState({daily: json})
    // console.log(this.state.daily)

    let userPlans = [];
    for (var i = 0; i < this.state.daily.length; i++) {
      if(this.state.daily[i].cohort == this.props.user.cohort){
        userPlans.push(this.state.daily[i])
      }
    }
    this.setState({userDaily: userPlans}, ()=>{
      // console.log(this.state.userDaily);
    })
    for (var i = 0; i < this.state.userDaily.length; i++) {
      if(this.state.userDaily[i].date == document.getElementById('date').innerText) {
        var one = this.state.userDaily[i]
        this.setState({oneDaily: one}, ()=>{
          // console.log(this.state.oneDaily);
        })
      }
    }
  }

  dailyDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10){
      dd='0'+dd;
    }
    if(mm<10){
      mm='0'+mm;
    }
    var today2 = mm+'/'+dd+'/'+yyyy;
    // console.log(today);
    return today2
  }

  backOneDay() {
    let date = document.getElementById('date').innerText
    let newDate = date.split('/')
    let month = newDate[0]
    let day = newDate[1]
    let year = newDate[2]
    if (month == 1 && day == 1) {
      year = Number(year) - 1
      month = 13
      day = 32
    }
    if(newDate[1]>1){
      day -= 1
    } else {
      month -= 1
      if(month == 1 || month == 3|| month == 5|| month == 7|| month == 8|| month == 10|| month == 12 ){
        day = 31
      } else if (month == 2 && year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        day = 29
      } else if (month == 2){
        day = 24
      } else {
        day = 30
      }
    }
    if (day.toString().length == 1) {
      day = '0'+ day.toString()
    }
    if (month.toString().length == 1) {
      month = '0'+ month.toString()
    }
    document.getElementById('date').innerText = month+'/'+day+'/'+year
    var count = 0
    for (var i = 0; i < this.state.userDaily.length; i++) {
      if(this.state.userDaily[i].date == document.getElementById('date').innerText) {
        count++
        var one = this.state.userDaily[i]
        this.setState({oneDaily: one})
      }
    }
    if (count == 0) {
      var message = "There's no daily plan for this day."
      this.setState({oneDaily: message})
    }
  }

  forwardOneDay() {
    let date = document.getElementById('date').innerText
    let newDate = date.split('/')
    let month = newDate[0]
    let day = newDate[1]
    let year = newDate[2]
    if (month == 12 && day == 31) {
      year = Number(year) + 1
      month = 1
      day = 0
    }
    if (month == 1 || month == 3|| month == 5|| month == 7|| month == 8|| month == 10|| month == 12 ) {
      if (day < 31){
        day = Number(day) + 1
      } else {
        month = Number(month) + 1
        day = 1
      }
    } else if (month == 4 || month == 6|| month == 9|| month == 11) {
      if (day < 30) {
        day = Number(day) + 1
      } else {
        month = Number(month) + 1
        day = 1
      }
    } else if (month == 2) {
      if (day < 24) {
        day = Number(day) + 1
      } else {
        month = Number(month) + 1
        day = 1
      }
    }
    if (day.toString().length == 1) {
      day = '0'+ day.toString()
    }
    if (month.toString().length == 1) {
      month = '0'+ month.toString()
    }
    document.getElementById('date').innerText = month+'/'+day+'/'+year
    var count = 0
    for (var i = 0; i < this.state.userDaily.length; i++) {
      if(this.state.userDaily[i].date == document.getElementById('date').innerText) {
        count++
        var one = this.state.userDaily[i]
        this.setState({oneDaily: one})
      }
    }
    if (count == 0) {
      var message = "There's no daily plan for this day."
      this.setState({oneDaily: message})
    }
  }

  render () {
    return (
      <div id="dailyPlanArea">
        <div id="dailyHead">
          <div onClick={this.backOneDay.bind(this)}><i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i></div>
          <h1 id="date">{this.dailyDate()}</h1>
          <div onClick={this.forwardOneDay.bind(this)}><i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i></div>
        </div>
        <br />
        <Plan oneDaily={this.state.oneDaily} />
      </div>
    )
  }
}

export default DailyPlan
