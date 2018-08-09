import React, { Component } from 'react'

export default class PigCard extends Component {
render(){
  return (
    <div>
      <ul className="normalText">
        <li>highest medal achieved: {this.props.pig['highest medal achieved']}</li>
        <li>weight: {this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
      </ul>
    </div>
)}
}
