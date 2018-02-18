import React, { Component } from 'react'
import Mock from '../../assets/exchange-mock.png'

class Exchange extends Component {
  render() {
    return (
      <div className='mock-view-container'>
        <img className='mock-view' src={Mock} />
      </div>
    )
  }
}

export default Exchange