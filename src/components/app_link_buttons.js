import React from 'react'
import appStore from '../assets/glimpse-two/app_store.png'
import playStore from '../assets/glimpse-two/play_store.png'

function AppLinkButtons(props) {

 
  return (
    <>
    <div className={`storebuttons ${props.specialClass}`}>
        <a 
          href='https://apps.apple.com/in/app/aloy-loyalty-benefits/id6455374651' className='app-download-button'
        >
          <img src={appStore} alt='appstore' />
        </a>
        <a href='https://play.google.com/store/apps/details?id=com.getaloy.user.aloyuser&hl=en' className='app-download-button'><img src={playStore} alt='playstore' /></a>
    </div> 
    

    </>
    
  )
}

export default AppLinkButtons