import React from 'react'
import {Link} from "react-router-dom";

import logo from "../assets/svg/aloy_logo.svg"
import instagram from '../assets/svg/instagram.svg'
import facebook from '../assets/svg/facebook.svg'
import linkedin from '../assets/svg/linkedin.svg'


function FooterSection() {
  return (
    <section className='footer-section'>
        <div className='footer-section-left'>
            <div className='footer-section-left-top'>
                <Link to='/privacy' >Privacy Policy</Link>
                <Link to='/terms' >Terms of use</Link>
                <a href='mailto:hello@getaloy.com' >Contact Us</a>
            </div>
            <div className='footer-section-left-bottom'>
                Copyright © Fortune9 Technologies
            </div>
        </div>
        <div className='footer-section-right'>
            <div className='footer-section-right-top'>
                <img src={logo} alt='aloy'/>
            </div>
            <div className='footer-section-right-bottom'>
                <span>Folow us on: </span>
                <div>
                <a target='blank' href='https://www.instagram.com/get.aloy'><img src={instagram} /></a>
                <a target='blank' href='https://www.facebook.com/people/Aloy/100094667438262'><img src={facebook} /></a>
                <a target='blank' href='https://www.linkedin.com/company/aloy-0'><img src={linkedin} /></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterSection