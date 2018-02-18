import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import TokenFlow from '../../assets/Tokenization-flow-large-image.png'

class Register extends Component {
  render() {
    return (
      <div className='mock-view-container'>
      <div className='landing-image-container'>
        <img className='mock-view' src={TokenFlow} />
        <div className='create-token-btn-container'>
          <Button className='create-token-btn'>Tokenize</Button>
          <Button className='create-token-btn'>Tokenize</Button>
        </div>
        </div>
      </div>
    )
  }
}

export default Register