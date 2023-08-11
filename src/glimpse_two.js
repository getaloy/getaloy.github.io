import React from 'react'
import wow from './assets/glimpse-two/wow.png'
import AppLinkButtons from './components/app_link_buttons'


function GlimpseTwo() {
  return (
    <div className='frame glimpse-one glimpse-two'>
      
        <div className='h3'>Never let your Loyalty Points Expire (Again)</div>
        <p className='p-top'>Tired of losing track of your loyalty points you earned?</p>
        <div className='wow-container desktop tablet mobile'>
            <img src={wow} alt='Never let your Loyalty Points Expire (Again)' className='wow'/>
            <div className='wow-right'>
                <p>Fret not! Aloy is here to make it easy for you to earn & redeem your loyalty benefits</p>
                <AppLinkButtons specialClass="storebuttons-in-glimpse-two"/>
            </div>
        </div>

    </div>
  )
}

export default GlimpseTwo