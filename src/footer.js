import React from 'react'
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className='snapbottom footer'>
        <div>Copyright© Fortune9 Technologies</div>
        <div>
            <span> <Link to='/privacy' >Privacy Policy</Link> </span>
            <span> <Link to='/terms' >Term of use</Link> </span>
            <span> <a href='mailto:hello@getaloy.com' >Contact us</a> </span>
        </div>
    </div>
  )
}

export default Footer