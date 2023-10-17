import React from 'react'

function RelationshipCard(props) {
  return (
    <div className='relationship-card'>
        <img src={props.image} alt={props.title} />
        <div className='relationship-card-content' >
        <div className='relationship-card-title heading-2'>{props.title}</div>
        <div className='relationship-card-description'>{props.description}</div>
        </div>
    </div>
  )
}

export default RelationshipCard