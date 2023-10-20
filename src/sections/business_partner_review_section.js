import React, {useState,useEffect} from 'react'
import PartnerCommnet from './widgets/partner_comment'
// import profile from "../assets/images/profile.png"
import { Bhuvaneswari_Jagan_mohan_image, Afzal_Hussain_Image } from '../assets/commenter_images'
function BusinessPartnerReviewSection() {


  const [partnerComments, setPartnerComments] = useState([])


  useEffect(() => {
    setPartnerComments(
      [
        [
          {
            name: "Afzal Hussain, Owner",
            post: "Frozen House",
            comment: "Many times  customers ask for discounts and it becomes difficult to say no to repeat customers. But with Aloy I tell them that we give 5% cashback which they can use for discount when they visit next time. Business runs great when customers are happy!",
            image: Afzal_Hussain_Image,
          },
          {
            // name: "Bhuvaneswari Jagan mohan, Owner",
            name: "B. J. Mohan, Owner",
            post: "Organic Direct",
            comment: "After starting our loyalty program with Aloy, my customers now insist to receive loyalty points for every purchase (ex. groceries, salads). I am glad that there is now another delightful factor for my repeat customers. ",
            image: Bhuvaneswari_Jagan_mohan_image,
          },
        ],
      ]
    )
  }, [] )
  

  return (
    <section className=' business-partner-review-section'>
        <div className='business-partner-review-section-title heading'>
          See what our Business Partners have to say
        </div>
        <div className='business-partner-review-section-comments'>

          {  
          partnerComments.map(
            (e, index) => (
              <div key={index}  className='business-partner-review-section-comments-card-continer'>
                {
                  e.map(
                    (f, i)  => {
                     
                      return <PartnerCommnet 
                        key = {i}
                        comment = {f.comment}
                        name = {f.name}
                        post = {f.post}
                        image = {f.image}
                      />
                    }
                  )
                }
              </div>
            )
          )
         }

         
          
        </div>
    </section>
  )
}

export default BusinessPartnerReviewSection