import React from 'react'
import RelationshipCard from './widgets/relationship_card'
import hero_image from "../assets/svg/hero_image.svg"
import special_day_offer from '../assets/svg/special_day_offer.svg'
import your_own_loyality_program from '../assets/svg/your_own_loyality_program.svg'
import personalized_rewards from '../assets/svg/personalized_rewards.svg'

function CustomerRelationship() {
  return (
    <section className='customer-relationship-section'>
        <div className='customer-relationship-section-title heading'>
            Everything you need for a deeper Customer Relationship
        </div>
        <div className='customer-relationship-section-cards'  >
            <RelationshipCard 
                title = "Special Day Offers"
                description = "Delight your customers with mouthwatering offers & discounts to celebrate their Birthday or Anniversary with their loved ones"
                image = {special_day_offer}
            />
            <RelationshipCard 
                title = "Your own Loyalty Program"
                description = "A simple loyalty program can show your repeat customers that you recognize and value the extent of their loyalty"
                image = {your_own_loyality_program}
            />
            <RelationshipCard 
                title = "Personalized Rewards"
                description = "Got a regular customer? Give them a special treatment by rewarding them with a free product or service that they love"
                image = {personalized_rewards}
            />
        </div>
    </section>
  )
}   

export default CustomerRelationship