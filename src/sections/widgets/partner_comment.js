import React from 'react'
import quote from "../../assets/svg/quote.svg"

function PartnerCommnet(props) {
  return (
    <>
        <div className='partner-comment-card-quote'>
            <img src={quote} alt='quote' />
        </div>
        <div className='partner-comment-card'>
            <div className='partner-comment'>
                {props.comment}
            </div>
        </div>
        <div className='partner-comment-card-name-section'>
            <div className='partner-comment-card-image'>
                <img src={props.image} alt='profile' />
            </div>
            <div className='partner-comment-card-name'>
                {props.name}
            </div>
           
        </div>
    </>
  )
}

export default PartnerCommnet