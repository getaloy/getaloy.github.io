import React from 'react';
import kuchen_helado from "../assets/images/brand_images/kuchen_helado.png";
import frozen_house from "../assets/images/brand_images/frozen_house.png";
import salad_matters from "../assets/images/brand_images/salad_matters.png";
import bhoomi_farms from "../assets/images/brand_images/bhoomi_farms.png";
import ImageScroller from './widgets/image_scroller';


function BrandsSection() {
  return (
    <section className='brands-section' >
        <div className='brands-section-title heading'>
             Brands that love us
        </div>
        {/* <div className='brands-section-images' >
              <img src={kuchen_helado} alt='Kuchen Helado' />
              <img src={frozen_house} alt='Frozen House' />
              <img src={salad_matters} alt='Salad Matters' />
              <img src={bhoomi_farms} alt='Bhoomi Farms' />
        </div> */}
       {/* <div className='brands-section-images' > */}
       <ImageScroller 
          images = {[
            kuchen_helado, frozen_house, salad_matters, bhoomi_farms
          ]}
        />
       {/* </div> */}
    </section>
  )
}

export default BrandsSection