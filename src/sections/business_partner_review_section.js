import React from 'react'
import PartnerCommnet from './widgets/partner_comment'
import profile from "../assets/images/profile.png"

function BusinessPartnerReviewSection() {
  return (
    <section className=' business-partner-review-section'>
        <div className='business-partner-review-section-title heading'>
          See what our Business Partners have to say
        </div>
        <div className='business-partner-review-section-comments'>
          <div className='business-partner-review-section-comments-card-continer'>
            <PartnerCommnet 
              comment = "I am so happy with Aloy. We have increased cutomer retention and grew in business with the loyalty program added. I look forward to give out more offers to get new customers and increase footfall in my outlet. Thank you once again Aloy."
              name = "Nishita Singh"
              image = {profile}
            />
            <PartnerCommnet 
              comment = "I am so happy with Aloy. We have increased cutomer retention and grew in business with the loyalty program added. I look forward to give out more offers to get new customers and increase footfall in my outlet. Thank you once again Aloy."
              name = "Nishita Singh"
              image = {profile}
            />
          </div>
          <div  className='business-partner-review-section-comments-card-continer' >
            <PartnerCommnet 
              comment = "I am so happy with Aloy. We have increased cutomer retention and grew in business with the loyalty program added."
              name = "Nishita Singh"
              image = {profile}
            />
            <PartnerCommnet 
              comment = "I am so happy with Aloy. We have increased cutomer retention and grew in business with the loyalty program added. I look forward to give out more offers to get new customers and increase footfall in my outlet. Thank you once again Aloy. I am so happy with Aloy. We have increased cutomer retention and grew in business with the loyalty program added. I look forward to give out more offers to get new customers and increase footfall in my outlet. Thank you once again Aloy. I look forward to give out more offers to get new customers and..."
              name = "Vikram Negi"
              image = {profile}
            />
          </div>
          <div  className='business-partner-review-section-comments-card-continer' >
            <PartnerCommnet 
              comment = "I am so happy with Aloy. We have increased cutomer retention and grew in business with the loyalty program added. I look forward to give out more offers to get new customers and increase footfall in my outlet. Thank you once again Aloy."
              name = "Nishita Singh"
              image = {profile}
            />
            <PartnerCommnet 
              comment = "I am so happy with Aloy. We have increased cutomer retention and grew in business with the loyalty program added. I look forward to give out more offers to get new customers and increase footfall in my outlet. Thank you once again Aloy."
              name = "Nishita Singh"
              image = {profile}
            />
          </div>
        </div>
    </section>
  )
}

export default BusinessPartnerReviewSection