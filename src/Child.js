import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="child"
        style={{backgroundColor: "#FFF"}}
        onClick={() => this.props.handleColorChange(getRandomColor())}
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
