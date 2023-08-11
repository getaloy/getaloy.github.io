import React from 'react'
import appStore from '../assets/glimpse-two/app_store.png'
import playStore from '../assets/glimpse-two/play_store.png'

function BusinessAppLinkButtons(props) {

 
  return (
    <>
   
    <div className={`storebuttons ${props.specialClass}`}>
        <a 
          href='https://apps.apple.com/in/app/aloy-business/id6452754331' className='app-download-button'
        >
          <img src={appStore} alt='appstore' />
        </a>
        <a href='https://play.google.com/store/apps/details?id=com.getaloy.merchant.aloy' className='app-download-button'><img src={playStore} alt='playstore' /></a>
    </div> 
    

    </>
    
  )
}

export default BusinessAppLinkButtons