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
        <p className='p-top'>Cafes, Restaurants, Grocery Store, Pharmacy, Ice-cream Parlour & more!</p>

        <div className='desktop'>
            <div className=' glimpse-one-images '>
            <img className='glimpse-one-image'  alt="cookies" src={cookies} />
            <img className='glimpse-one-image' alt="pizza"  src={pizza} />
            <img className='glimpse-one-image' alt="icecream"  src={icecream} />
            <img className='glimpse-one-app' alt="appLayout"  src={appLayout} />
            <img className='glimpse-one-image' alt="coffee"  src={coffee} />
            <img className='glimpse-one-image' alt="vegetables" src={vegetables} />
            <img className='glimpse-one-image' alt="medicine" src={medicine} /> 
            </div>
        </div>
        <div className='tablet glimpse-one-tab'>
            <div className=' glimpse-one-images '>
            <img className='glimpse-one-app' alt='appLayout' src={appLayout} />
            </div>
            <div className=' glimpse-one-images '>
            <img className='glimpse-one-image' alt="cookies" src={cookies} />
            <img className='glimpse-one-image' alt="pizza" src={pizza} />
            <img className='glimpse-one-image' alt="icecream" src={icecream} />
            <img className='glimpse-one-image' alt="coffee" src={coffee} />
            <img className='glimpse-one-image' alt="vegetables" src={vegetables} />
            <img className='glimpse-one-image' alt="medicine" src={medicine} /> 
            </div>
        </div>

        <div className='mobile'>
          <img className='glimpse-one-app-sm'  alt='appLauyot' src={appLayout} />
          <img className='glimpse-one-image-sm' alt='catalog' src={catalog} />
        </div>

        
    </div>
  )
}

export default GlimpseOne