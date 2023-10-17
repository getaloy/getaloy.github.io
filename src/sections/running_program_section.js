import React from 'react'
import self_serve from '../assets/svg/running_program/self_serve.svg'
import milestone from '../assets/svg/running_program/milestone.svg'
import multiple_outlets from '../assets/svg/running_program/outlets.svg'
import pos from '../assets/svg/running_program/pos.svg'
import customer_friendly from '../assets/svg/running_program/customer.svg'
import direct_image from '../assets/svg/running_program/running_program_image_direct.svg'
import RunningProgramMobileCard from './widgets/running_program_mobile_card'

function RunningProgramSection() {
  return (
    <section className='running-program-section'>
      <div className=' running-program-section-title heading'>
        Running a loyalty program was never this easy
      </div>
      
      <div >
        <img className='running-program-direct-image' src={direct_image} alt='Running a loyalty program was never this easy'/>
      </div>
      <div>
        <RunningProgramMobileCard
          image= {self_serve }
          title = "SELF-serve"
          description = "Manage, update & see ROI from your loyalty program, directly on the app"
        />
        <RunningProgramMobileCard
          image= {milestone }
          title = "milestone rewards"
          description = "Give out offers and discounts to your customer once they reach a milestone"
        />
        <RunningProgramMobileCard
          image= {multiple_outlets }
          title = "multiple outlets"
          description = "Have multiple outlets? Don’t worry, we got your back. You can list and manage all your outlets"
        />
        <RunningProgramMobileCard
          image= {pos }
          title = "pos integrations"
          description = "Fully integrated with most billing providers such as PetPooja for a seamless experience"
        />
        <RunningProgramMobileCard
          image= {customer_friendly }
          title = "customer-friendly"
          description = "Customers can access and redeem their rewards directly from their phone"
        />
      </div>
    </section>
  )
}

export default RunningProgramSection