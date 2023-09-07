import React from 'react'
import aloyLogo from './assets/hero/aloy.png'
import hamburgerIcon from './assets/svg/hamburger.svg'
import './styles.css'
import AppLinkButtons from './components/app_link_buttons'
import close from './assets/svg/close.svg'
import arrow from './assets/hero/arrow.svg'
import arrowDownBold from './assets/hero/arrow-down-bold.svg'
import coin from './assets/hero/coin.png'
// import {Link} from 'react-scroll'
import { HashLink as Link } from 'react-router-hash-link'


import { useState, useRef } from 'react';
import { CSSTransition } from "react-transition-group";


function ScreenHero() {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  const handleClick = () => {
    console.log('clicked')
    let what = !inProp
    setInProp(what)
    console.log(inProp)
  }

  return (
    <>
     
    
      <div className='frame hero'>


      <CSSTransition
        in={inProp}
        timeout={300}
        classNames="panel"
        nodeRef={nodeRef}
      >
        <div  id='panel' className='panel' ref={nodeRef}>
          <div className='close-button' > <button  onClick={handleClick} > 
          <img src={close} alt='close-button'/> 
           </button> </div>
          <div className='item' > 
            <Link to='#aloy-for-business' onClick={handleClick}>Aloy For Business</Link> </div>
          <div className='mobile  item'> 
          <Link  
              onClick={handleClick}
              to='#how-it-works' 
            >
                How it Works?
            </Link> 
          </div>
          <div className='item' > <a href='mailto:hello@getaloy.com' onClick={handleClick}>Contact Us</a> </div>
        </div>
      </CSSTransition>

      
        <div className='header'> 

          <div className='logo' >
            <img src={aloyLogo} alt="Aloy: Loyality benifits with repeat purchase" />
          </div>

          <div className='header-right' >
          <Link  
              to='#how-it-works' 
              className='tablet'
            >
                How it Works?
            </Link> 
            <Link  
              to='#how-it-works' 
              className='desktop'
            >
                How it Works?
            </Link> 
            <button className='hamburg-button' onClick={handleClick} > 
              <img src={hamburgerIcon} alt='hamburder-icon'/> 
            </button>
          </div>
        </div>
        <div  className='hero-part'>
            <div className='main-text'>
              <span>Loyalty </span>
              <span className='diff-color'>Benefits </span>
              <span>With </span>
              <span>Repeat </span>
              <span className='diff-color'>Purchases </span>
            </div>
            <img className='arrow-image' src={arrow} alt='decorative arrow'/>
            <AppLinkButtons specialClass="storebuttons-in-hero" />
          </div>
            <img  className='arrow-down' src={arrowDownBold} alt='down-directon-arrow' />
      </div>
      <div className='coindiv' >
    
      <img className='coin1 coinFlip' src={coin} alt='floating-coin'/> 
      <img className='coin2 coinFlip' src={coin} alt='floating-coin'/> 
      <img className='coin3 coinFlip' src={coin} alt='floating-coin'/> 
      <img className='coin4 coinFlip' src={coin} alt='floating-coin'/> 
      <img className='coin5 coinFlip' src={coin} alt='floating-coin'/> 
      <img className='coin6 coinFlip' src={coin} alt='floating-coin'/> 
      </div>
    </>
  )
}

export default ScreenHero