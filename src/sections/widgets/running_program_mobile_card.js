import React from 'react'

function RunningProgramMobileCard(props) {
  return (
    <div className='running-programm-mobile-card' >
        <div className='running-programm-mobile-card-hexagon'>
            <img src={props.image} />
        </div>
        <div className='running-programm-mobile-card-content'>
            <div className='running-programm-mobile-card-title' >
            {props.title}
            </div>
            <div className='running-programm-mobile-card-description'>
            {props.description}
            </div>
        </div>
    </div>
  )
}

export default RunningProgramMobileCard