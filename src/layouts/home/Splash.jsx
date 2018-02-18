import React, { Component } from 'react'
import HomePlants from '../../assets/Homes-Plants-Icons-Large.png'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

class Splash extends Component {
  render() {
    return (
      <div className="landing-image-container padding-sm">
        <div className="landing-image-text-container">
          <h1 className="landing-image-text">Democratizing Land Ownership for <span className="purple-text">Everyone</span></h1>
          <div className="landing-image-button-container">
            <Link to='/register'>
              <Button bsSize="large" className="landing-image-button" bsStyle="success">Tokenize Your Real Estate Asset</Button>
            </Link>
            <Link to = '/exchange'>
              <Button bsSize="large" bsClass="purple-background" className="landing-image-button">Trade Fractional Shares of Real Estate</Button>
            </Link>
          </div>
        </div>
        <img className="landing-image" src={HomePlants} />
      </div>
    )
  }
}

export default Splash