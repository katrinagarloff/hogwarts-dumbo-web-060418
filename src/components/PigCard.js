import React, { Component } from 'react'
import PigInfo from './PigInfo.js'

export default class PigCard extends Component {
  state = {showInfo: false}


    getPigPix = (pigName) => {
      let underPigScore = pigName.split(' ').join('_').toLowerCase()
      return require(`../hog-imgs/${underPigScore}.jpg`)
    }

     tileClick = () => {
         this.setState({showInfo: !this.state.showInfo})
     }

  render(){
    return (
      <div className="ui four wide column">
        <div className="pigTile">

          <h3 className="hoggyText">
            {this.props.pig.name}
          </h3>


          <img src={this.getPigPix(this.props.pig.name)}/>
          <p className="achievementText">
            {this.props.pig.specialty}
          </p>
            <button onClick={this.tileClick}>More Info
            </button>
            {this.state.showInfo ? <PigInfo pig={this.props.pig} /> : null}


        </div>
      </div>
    )
  }
}
