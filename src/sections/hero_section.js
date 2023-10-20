import React from 'react'
import aloy_logo from "../assets/svg/aloy_logo.svg"
import hero_image from "../assets/svg/hero_image.svg"
// import hamburgerIcon from '../assets/svg/hamburger.svg'
// import close from '../assets/svg/close.svg'



// import { HashLink as Link } from 'react-router-hash-link'

// import { useState, useRef } from 'react';
// import { CSSTransition } from "react-transition-group";

function HeroSection() {

    // const [inProp, setInProp] = useState(false);
    // const nodeRef = useRef(null);
  
    // const handleClick = () => {
 
    //   let what = !inProp
    //   setInProp(what)
  
    // }

  return (
    <section className='hero-section'>

        {/* <CSSTransition
            in={inProp}
            timeout={100}
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
        </CSSTransition> */}
        <div className='navigation-bar'>
            <div className='navigaton-bar-logo'>
                <img src={aloy_logo} alt='Aloy' />
            </div>
            <div  className='navigation-bar-buttons'>
                <a href='http://google.com' className='navbar-first-button button '>Blog</a>
                <a href=' https://wa.link/it9dpt' className='solid-button'>Try for free</a>
            </div>

            {/* <button className='hamburg-button' onClick={handleClick} > 
              <img src={hamburgerIcon} alt='hamburder-icon'/> 
            </button> */}
        </div>
        <div className='hero-business'>
            <div className='hero-left'>
                <div className='main-text'>
                    <span>OFFER<span className='solid'>Loyalty BENEFITS</span></span>
                    <span>to grow your Restaurant </span>
                    <span>& RETAIL business</span>
                </div>
                <div className='hero-paragraph' >
                Retain customers for longer & increase revenue with milestone-based loyalty benefits such as cashbacks, discounts and personalized rewards.
                </div>
                <div className='hero-buttons' >
                    <a href=' https://wa.link/it9dpt' className='hero-left-button solid-button'>Try for Free</a>
                    <a href='https://wa.link/rqivpw' className='button-with-border'>Talk to Us</a>
                </div>
            </div>
            <div className='hero-right'>
            <img src={hero_image} alt='A man buying stuff and enjoying loylty from that buisness' />
            </div>
        </div>
    </section>  
  )
}

export default HeroSection