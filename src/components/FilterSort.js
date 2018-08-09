import React, { Component } from 'react'


export default class FilterSort extends Component {

  render(){
    return (
      <div className= "container" >
      <div className="ui checkbox">
        <input type="checkbox" onChange={this.props.filterPigs} value='off'></input>
          <label>Greased pigs only?</label>
      </div>
      <select onChange={this.props.sortPigs}>
        <option value="weight"> weight </option>
        <option value="name"> name </option>
      </select>
      <br/>
      <br/>
      </div>

    )
  }
}
