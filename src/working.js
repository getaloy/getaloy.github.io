import React from 'react'
import { useInView } from 'react-intersection-observer';
import scanme from './assets/working/scanme.png'
import congrats from './assets/working/congrats.png'
import gain from './assets/working/gain.png'

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
            <img src={congrats} alt='Gaining points have never been easier' class={`${congrats} ${imageTwoInView ? "visible" : "invisible"}`} />
            <img src={gain} alt=' Gain monetary benefits'  class={`${imageThreeInView ? "visible" : "invisible"}`} />
        </div>
        <div>
        <div className='frame working-slider-text'>
           <div className='working-slider-text-inner' >
           <div className='working-slider-text-heading'>
                Scan me!
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
                Gaining points have never been easier
            </div>
            <div ref={imageTwoRef} className='working-slider-text-paragraph'>
                Loyalty Rewards starts showing in as soon as the merchant scans your QR. You can see your total points in the outlet’s profile
            </div>
          </div>
        </div>
       
        <div className='frame working-slider-text'>
           <div  className='working-slider-text-inner' >

           <div className='working-slider-text-heading'>
                Gain monetary benefits
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


