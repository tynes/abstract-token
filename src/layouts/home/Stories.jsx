import React, { Component } from 'react'
import FBStadiumStory from '../../assets/fb-stadium-stories-large.png'
import BookstoreStory from '../../assets/bookstore-stories-large.png'
import CommunityGarden from '../../assets/community-garden-large.png'

const Stories = () => {
  return (
    <div>
      <div className='landing-image-container'>
        <img className='landing-image' src={BookstoreStory} />
        <div className='landing-image-text'>Local Mom and Pop establishments may not have to shut down due to financial strain</div>
      </div>
      <div className='landing-image-container'>
        <img className='landing-image' src={FBStadiumStory} />
        <div className='landing-image-text'>Create new revenue streams for established franchines whilst re-defining the ways fans interact with teams & brands</div>
      </div>
      <div className='landing-image-container'>
        <img className='landing-image' src={CommunityGarden} />
        <div className='landing-image-text'>Invigorate a passionate community with a project that feeds the ecosystem and encourages constant collaboration</div>
      </div>
    </div>
  )
}

export default Stories
