import React, { Component } from 'react'
import Splash from './Splash.jsx'
import MainCopy from './MainCopy.jsx'
import Stories from './Stories.jsx'
import Statement from './Statement.jsx'
import Footer from './Footer.jsx'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Splash />
        <MainCopy />
        <Stories />
        <Statement />
        <Footer />
      </div>
    )
  }
}

export default LandingPage