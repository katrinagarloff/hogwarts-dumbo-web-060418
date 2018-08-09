import React, { Component } from 'react'
import PigCard from './PigCard.js'
export default class PigsDiv extends Component {

  


  render(){
    console.log(this.state)
    return (
      <div className="ui grid container">
        {this.props.pigs.map((pig) =>
           <PigCard pig={pig} />
        )}
      </div>
    )
  }
}
