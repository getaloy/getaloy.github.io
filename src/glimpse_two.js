import React from 'react'
import wow from './assets/glimpse-two/wow.png'
import AppLinkButtons from './components/app_link_buttons'


function GlimpseTwo() {
  return (
    <div className='frame glimpse-one glimpse-two'>
      
        <div className='h3'>Never let your Loyalty Points Expire (Again)</div>
        <p className='p-top'>Tired of an expiry date for every loyalty points you get on other apps?</p>
        <div className='wow-container desktop tablet mobile'>
            <img src={wow} alt='wow' className='wow'/>
            <div className='wow-right'>
                <p>Fret not! Aloy is here to solve those problems, where you can keep safe your points for as long as you need.</p>
                <AppLinkButtons/>
            </div>
        </div>

    </div>
  )
}

export default GlimpseTwo