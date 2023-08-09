import React from 'react'
// import './styles.css'
import cookies from './assets/glimpse-one/cookies.png'
import pizza from './assets/glimpse-one/pizza.png'
import icecream from './assets/glimpse-one/icecream.png'
import appLayout from './assets/glimpse-one/app_layout.png'
import coffee from './assets/glimpse-one/coffee.png'
import vegetables from './assets/glimpse-one/vegetables.png'
import medicine from './assets/glimpse-one/medicine.png'
import catalog from './assets/glimpse-one/catalog_sm.png'

function GlimpseOne() {
  return (
    <div className='frame glimpse-one'>
      
        <div className='h3'>Earn loyalty points from your favourite outlets</div>
        <p>Earn points every time you indulge in retail therapy – because being loyal never felt this rewarding</p>

        <div className='desktop'>
            <div className=' glimpse-one-images '>
            <img className='glimpse-one-image' src={cookies} />
            <img className='glimpse-one-image' src={pizza} />
            <img className='glimpse-one-image' src={icecream} />
            <img className='glimpse-one-app' src={appLayout} />
            <img className='glimpse-one-image' src={coffee} />
            <img className='glimpse-one-image' src={vegetables} />
            <img className='glimpse-one-image' src={medicine} /> 
            </div>
        </div>
        <div className='tablet glimpse-one-tab'>
            <div className=' glimpse-one-images '>
            <img className='glimpse-one-app' src={appLayout} />
            </div>
            <div className=' glimpse-one-images '>
            <img className='glimpse-one-image' src={cookies} />
            <img className='glimpse-one-image' src={pizza} />
            <img className='glimpse-one-image' src={icecream} />
            <img className='glimpse-one-image' src={coffee} />
            <img className='glimpse-one-image' src={vegetables} />
            <img className='glimpse-one-image' src={medicine} /> 
            </div>
        </div>

        <div className='mobile'>
          <img className='glimpse-one-app-sm' src={appLayout} />
          <img className='glimpse-one-image-sm' src={catalog} />
        </div>

        
    </div>
  )
}

export default GlimpseOne