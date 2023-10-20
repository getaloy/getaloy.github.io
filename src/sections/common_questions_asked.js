import React from 'react'
import QuestionBox from './widgets/queston_box'
import SiteData from '../data/data'

function CommonQuestionsAskedSection() {

  return (
    <seciton className=" common-questions-asked-section"  >
        <div className='common-questions-asked-section-title heading'>
        Common Questions Asked
        </div>
        <div className='common-questions-asked-section-questions' >
         {  
          SiteData.qna.map(
            (e, index) => (
              <QuestionBox 
              key = {index}
                question = {e.question}
                answer = {e.answer}
              />
            )
          )
         }
        </div>
    </seciton>
  )
}

export default CommonQuestionsAskedSection