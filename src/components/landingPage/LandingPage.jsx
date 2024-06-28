import React from 'react'
import './landingPage.css'
import landingVideo from '../../assets/video.mp4'

const LandingPage = () => {
  return (
    <div className='text-dark LandingPage'>
      <video
              src={landingVideo} // Replace with the actual video source path
              className="w-100 h-100"
              autoPlay
              muted
              loop
              // playsInline
            ></video>
    </div>
  )
}

export default LandingPage