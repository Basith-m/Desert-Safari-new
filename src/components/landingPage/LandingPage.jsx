import React from 'react'
import './landingPage.css'

const LandingPage = () => {
  return (
    <div className='text-dark LandingPage'>
      <video
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" // Replace with the actual video source path
              className="w-100 h-100"
              autoPlay
              muted
              // playsInline
            ></video>
    </div>
  )
}

export default LandingPage