import React, { Component } from 'react'
import LandingPage from './LandingPage.jsx'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <div>
              <LandingPage />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
