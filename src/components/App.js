import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import FilterSort from './FilterSort.js'
import PigsDiv from './PigsDiv.js'
import PigCard from './PigCard.js'

class App extends Component {
  state = {
    pigs: hogs.map((pig) => {return pig}),
    checkBox: false,
    dropDown: ""
}

  filterPigs = () => {
    if(!this.state.checkBox){
    this.setState(
      {pigs: this.state.pigs.filter((pig) => pig.greased),
      checkBox: true}
    )
  } else {
    this.setState(
      {pigs: hogs.map((pig) => {return pig}),
      checkBox: false}
    )

    }
  }

  pigSortWeight = (arr) => {
    let newArr = [...arr]
    return arr.sort((a,b)=> a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] );
  }

  sortPigs = (e) => {
    switch (e.target.value) {
      case "weight":
        this.setState((prevState) => {
        {

          pigs: this.pigSortWeight(this.state.pigs)

        }
      })
        break;
      case "name":

        break;
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <FilterSort filterPigs={this.filterPigs} sortPigs={this.sortPigs}/>
          <PigsDiv pigs={this.state.pigs}/>
      </div>
    )
  }
}

export default App;
