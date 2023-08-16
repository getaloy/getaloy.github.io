import React from 'react'
import { useInView } from 'react-intersection-observer';
import scanme from './assets/working/scanme.png'
// import congrats from './assets/working/congrats.png'
import gain from './assets/working/gain.png'
import congrstsGif from "./assets/working/congratsgif.gif"

function Wroking() {


    
    const {ref : imageOneRef ,  inView : imageOneInView}  = useInView()
    const {ref : imageTwoRef ,  inView : imageTwoInView}  = useInView()
    const {ref : imageThreeRef ,  inView : imageThreeInView}  = useInView()
  

    
  return (
    <>
    <div className='working' id='how-it-works'>
      <div className="working-heading">
        How does Aloy work?
      </div>
      <div className='working-slider'>
        <div className='working-slider-image working-slider-image-back'>
            <img src={scanme} alt='Scan me!' class={` ${imageOneInView ? "visible" : "invisible"}`} />
            <img src={congrstsGif} alt='Gaining points have never been easier' class={` ${imageTwoInView ? "visible" : "invisible"}`} />
            <img src={gain} alt=' Gain monetary benefits'  class={`${imageThreeInView ? "visible" : "invisible"}`} />
        </div>
        <div>
        <div className='frame working-slider-text'>
           <div className='working-slider-text-inner' >
           <div className='working-slider-text-heading'>
           Show your QR Code!
            </div>
            <div ref={imageOneRef} className='working-slider-text-paragraph'>
            Walk into your favourite outlet and show your QR at the time of billing
            </div>
            <div className='working-slider-text-sub-paragraph'>
                *Currently available only in Bangalore
            </div>
           </div>
        </div>
        <div className='frame working-slider-text'>
          <div  className='working-slider-text-inner' >
          <div className='working-slider-text-heading'>
          Loyalty Points are credited instantly
            </div>
            <div ref={imageTwoRef} className='working-slider-text-paragraph'>
            Loyalty Rewards starts showing up as soon as the merchant scans your QR.
            </div>
          </div>
        </div>
       
        <div className='frame working-slider-text'>
           <div  className='working-slider-text-inner' >

           <div className='working-slider-text-heading'>
           Redeem for Cash Discounts
            </div>
            <div ref={imageThreeRef}  className='working-slider-text-paragraph'>
            The next time to visit the same outlet, use your Loyalty points for cash discounts on your total bill
            </div>
           </div>
        </div>
        </div>
      </div>
      </div>
    
    
    </>
  )
}

export default Wroking


