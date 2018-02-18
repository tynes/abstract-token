import React, { Component } from 'react'
import Splash from './Splash.jsx'
import AssetContainer from './AssetContainer.jsx'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
    this.state = {
      shortcircuit: true
    }
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <Splash />
            <AssetContainer shortcircuit={this.state.shortcircuit} />
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
