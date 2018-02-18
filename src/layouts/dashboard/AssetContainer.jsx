import React, { Component } from 'react'
import { Link } from 'react-router'
import { DropdownList } from 'react-widgets'
import Asset from './Asset.jsx'
import 'react-widgets/dist/css/react-widgets.css'

// TODO - smaller mock
import Mock from '../../assets/search-results-bottom-half-image-large.png'

// TODO - async requests here to fetch data from chain

class AssetContainer extends Component {
  constructor() {
    super()
    // MOCK DATA
    this.state = {
      dropdowns: {
        tokens: [],
        txnType: [],
        assetType: [],
        location: [],
      },
      assets: [
        {
          title: 'Holden\'s Courtyard',
          location: 'Boulder, Co',
          type: 'Multifamily - Garden Apts',
          imageSrc: '',
          coinSymbol: '',
          coinName: '',
          size: '',
          description: '',
        },
        {
          title: '1111 Ender Lane',
          location: 'Golden, CO',
          type: 'Multifamily - Garden Apts',
          imageSrc: '',
          coinSymbol: '',
          coinName: '',
          size: '',
          description: '',
        },
        {
          title: 'Holden\'s Courtyard',
          location: 'Boulder, CO',
          type: 'Multifamily - Garden Apts',
          imageSrc: '',
          coinSymbol: '',
          coinName: '',
          size: '',
          description: '',
        },
        {
          title: '1111 Ender Lane',
          location: 'Golden, CO',
          type: 'Multifamily - Garden Apts',
          imageSrc: '',
          coinSymbol: '',
          coinName: '',
          size: '',
          description: '',
        },
      ]
    }
    this._dropdownBuilder = this._dropdownBuilder.bind(this)
    this.dropdownMenuBuilder = this.dropdownMenuBuilder.bind(this)
  }

  // private function
  _dropdownBuilder(label, data, i) {
    return (
      <div
        className={`pure-u-1-${Object.keys(this.state.dropdowns).length + 1} dashboard-dropdown`}
        key={i}
      >
        <DropdownList
          data={data}
        />
      </div>
    )
  }

  dropdownMenuBuilder() {
    return Object.keys(this.state.dropdowns).map((key, i) => {
      return this._dropdownBuilder(key, this.state.dropdowns[key], i)
    })
  }

  assetBuilder(asset, i) {
    return (
        <Asset
        title={asset.title} 
        location={asset.location}
        type={asset.type}
        imageSrc={asset.imageSrc}
        coinSymbol={asset.coinSymbol}
        coinName={asset.coinName}
        size={asset.size}
        description={asset.description}
        key={i}
      />
    )
  }

  assetResultBuilder() {
    return this.state.assets.map((asset, i) => this.assetBuilder(asset, i))
  }

  render() {
    if (this.props.shortcircuit) {
      return (
        <div className='mock-view-container landing-image-container'>
          <img className='mock-view' src={Mock} />
          <Link className='force-front shortcircuit-btn' to='/exchange' />
        </div>
      );
    }
    return (
      <div>
        <div className='pure-g grey-background'>
          {this.dropdownMenuBuilder()}
        </div>
        <h3>Tradable Tokenized Asset Results:</h3>
      </div>
    )
  }
}

export default AssetContainer
