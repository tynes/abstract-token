import React, { Component } from 'react'

class Asset extends Component {
  constructor() {
    super()
  }
  render() {
    console.log(this.props)
    return(
      <div
        className='pure-u-1-3 asset-container'
      >
        <h1>{this.props.title}</h1>
        {this.props.imageSrc}
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Asset
