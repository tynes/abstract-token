import React, { Component } from 'react'
import Tree from '../../assets/Tree-large.svg'

class Splash extends Component {
  render() {
    return(
      <div className="pure-g purple-background dashboard-splash-container">
        <div className="pure-u-1-3 dashboard-splash-text-container padding-lg">
          <h1 className="white-text">Illiquidity and high cost to entry?</h1>
          <h1 className="green-text">#buhbye</h1>
          <h3 className="white-text">Whether from the perspective of a homebuyer, a timeshare holder or private real estate investor, your investment is locked up for several years - and that's only if you can afford the high barrier to entry...</h3>
          <h3 className="white-text">Enter Abstract Exchange.</h3>
        </div>
        <div className="dashboard-splash-image">
          <Tree />
        </div>
      </div>
    )
  }
}

export default Splash
