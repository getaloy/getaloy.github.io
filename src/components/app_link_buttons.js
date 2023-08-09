import React from 'react'
import appStore from '../assets/glimpse-two/app_store.png'
import playStore from '../assets/glimpse-two/play_store.png'

function AppLinkButtons() {
  return (
    <div className='storebuttons '>
        <a className='app-download-button'><img src={appStore} alt='appstore' /></a>
        <a className='app-download-button'><img src={playStore} alt='playstore' /></a>
    </div>
  )
}

export default AppLinkButtons