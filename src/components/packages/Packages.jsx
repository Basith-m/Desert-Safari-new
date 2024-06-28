import React from 'react'
import CardSlider from '../cardSlider/CardSlider'
import './packges.css'

const Packages = () => {
    return (
        <div>
            <div className='slider'>
                <div className='container d-flex flex-column gap-5'>
                    <h2>Desert Safari</h2>
                    <CardSlider />
                </div>
            </div>
            <div className='slider'>
                <div className='container d-flex flex-column gap-5'>
                    <h2>Buggy Tours</h2>
                    <CardSlider />
                </div>
            </div>
        </div>
    )
}

export default Packages