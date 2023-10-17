import React, {useState} from 'react'
import arrow_up from '../../assets/svg/arrow_up.svg'
import arrow_down from '../../assets/svg/arrow_down.svg'
function QuestionBox(props) {

    const [isOpened, setIsOpened] = useState(false) ;

   const toggleOpen = () => {
    
        setIsOpened(!isOpened)
        
   }

   const answerStyle = {
        display: isOpened ? 'block' : 'none'
   }
   const boxStyle = {
        transition: 'all 0.5s ease-in-out'
   }

  return (
    <div className='question-box' onClick={toggleOpen}>
        <div className='question-box-top'>

        <div className='question-box-question'>
            {props.question}
        </div>
        <div className='icon' >
            <img src={isOpened ? arrow_up : arrow_down}/>
        </div>
        </div>
        <div style={answerStyle}  className='question-box-answer'>
            {props.answer}
        </div>
    </div>
  )
}

export default QuestionBox