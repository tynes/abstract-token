import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import TokenFlow from '../../assets/Tokenization-flow-large-image.png'
import { connect } from 'react-redux'
import { addAsset } from '../../util/web3/call.js'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      // hard coding in contract params
      address: '0x78f831572e27585f6a2634035e227780c521ed31',
      attribute: '',
      addresses:[
        "0x2191eF87E392377ec08E7c08Eb105Ef5448eCED5",
        "0x2932b7A2355D6fecc4b5c0B6BD44cC31df247a2e",
        "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
        "0xf17f52151EbEF6C7334FAD080c5704D77216b732"
      ], 
      imageUrl: '',
      type: 'retail'
    }
    this.addAssets = this.addAssets.bind(this);
  }

  addAssets() {
    if (this.props.web3) {
      addAsset(this.state.attribute,
               this.state.addresses,
               this.state.imageUrl,
               this.state.type,
               this.props.web3.web3Instance)
    }
  }
  getTotalSupply() {

  }
  render() {
    return (
      <div className='mock-view-container'>
      <div className='landing-image-container'>
        <img className='mock-view' src={TokenFlow} />
        <div className='create-token-btn-container'>
          <Button
            className='create-token-btn'
            onClick={() => this.addAssets()}
          >
          Tokenize
          </Button>
          <Button className='create-token-btn'>Tokenize</Button>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps = {}) => {
  return state;
}

export default connect(mapStateToProps)(Register)