import React , {useState, useRef, useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import setup from './assets/brand-love/setup.png'
import drive from './assets/brand-love/drive.png'
import smooth from './assets/brand-love/smooth.png'
import appStore from './assets/glimpse-two/app_store.png'
import playStore from './assets/glimpse-two/play_store.png'
import AppLinkButtons from './components/app_link_buttons';

function BrandLove() {


    
    const {ref : imageOneRef ,  inView : imageOneInView}  = useInView()
    const {ref : imageTwoRef ,  inView : imageTwoInView}  = useInView()
    const {ref : imageThreeRef ,  inView : imageThreeInView}  = useInView()


    

  return (
    <>
    <div className='working love-back' >
      <div className="working-heading love-back">
        How does Aloy work?
      </div>
      <div className='working-slider'>
        <div className='working-slider-image'>
            <img src={setup} class={` ${imageOneInView ? "visible" : "invisible"}`} />
            <img src={drive} class={`${drive} ${imageTwoInView ? "visible" : "invisible"}`} />
            <img src={smooth}  class={`${imageThreeInView ? "visible" : "invisible"}`} />
        </div>
        <div>
        <div className='frame working-slider-text'>
          <div  className='working-slider-text-inner' >
            <div className='working-slider-text-heading'>
                  Easy to set up
              </div>
              <div ref={imageOneRef} className='working-slider-text-paragraph'>
                  Streamline customer rewards effortlessly with our intuitive loyalty points system – simple setup, seamless management
              </div>
              <div className='working-slider-text-sub-paragraph sub-paragraph-love'>
                GET ALOY FOR BUSINESS
              </div>
              <AppLinkButtons/>
          </div>
        </div  >
        <div className='frame working-slider-text'>
            <div  className='working-slider-text-inner' >
              <div className='working-slider-text-heading'>
              Drive higher numbers
              </div>
              <div ref={imageTwoRef} className='working-slider-text-paragraph'>
                  Experience the power of customer loyalty in action and elevate your business to new heights as your customer footfalls skyrocket
              </div>
              <div className='working-slider-text-sub-paragraph sub-paragraph-love'>
                GET ALOY FOR BUSINESS
              </div>
              <AppLinkButtons/>
            </div>
        </div>
       
        <div className='frame working-slider-text'>
            <div  className='working-slider-text-inner' >
              <div className='working-slider-text-heading'>
                  Smooth customer satisfaction
              </div>
              <div ref={imageThreeRef}  className='working-slider-text-paragraph'>Fret not! Aloy is here to solve those problems, where you can keep safe your points for as long as you need.</div>
              <div className='working-slider-text-sub-paragraph sub-paragraph-love'>
                GET ALOY FOR BUSINESS
              </div>
              <AppLinkButtons/> 
            </div>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default BrandLove


