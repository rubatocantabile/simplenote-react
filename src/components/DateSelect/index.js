import React from 'react';
import './index.css';

class DateSelect extends React.Component {

  constructor(props) {
    super(props) 
    let today = new Date()
    this.state = {
      date: today.toDateString(),
      years: [today.getFullYear() - 1, today.getFullYear()],
      year: today.getFullYear(),
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      month: today.getMonth() + 1,
      days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      day: today.getDate(),
    }
  }

  onEditYear(e) {
    this.setState({
      "year":e.target.value,
      "date":new Date(e.target.value, 
                      this.state.month - 1,
                      this.state.day).toDateString()
    })
    this.props.onDateChange(
      new Date(e.target.value, this.state.month - 1, 
               this.state.day).toDateString())
  }

  onEditMonth(e) {
    this.setState({
      "month":e.target.value,
      "date":new Date(this.state.year, 
                      e.target.value - 1,
                      this.state.day).toDateString()
    })
    this.props.onDateChange(
      new Date(this.state.year, e.target.value - 1, 
               this.state.day).toDateString())
  }

  onEditDay(e) {
    this.setState({
      "day":e.target.value,
      "date":new Date(this.state.year, 
                      this.state.month - 1,
                      e.target.value).toDateString()
    })
    this.props.onDateChange(
      new Date(this.state.year, this.state.month - 1, 
               e.target.value).toDateString()) 
  }

  render() {
    const { date, onDateChange } = this.props;
    
    let yearOptions = this.state.years.map(function(year) {
      return <option value={year} key={year}>{year}</option>;
    });
    let monthOptions = this.state.months.map(function(month) {
      return <option value={month} key={month}>{month}</option>;
    });
    let dayOptions = this.state.days.map(function(day) {
      return <option value={day} key={day}>{day}</option>;
    });
    return (
      <div className="dateselect">
        <select
          className="year"
          value={this.state.year}
          onChange={(e) => this.onEditYear(e)}>
            {yearOptions}
          </select>
          <select
          className="month"
          value={this.state.month}
          onChange={(e) => this.onEditMonth(e)}>
            {monthOptions}
          </select>
          <select
          className="day"
          value={this.state.day}
          onChange={(e) => this.onEditDay(e)}>
            {dayOptions}
          </select>
      </div>
    );
  }
}

export default DateSelect;