import React from 'react'
import hexagon from '../../assets/svg/running_program/polygon_needed.svg'
import hexagon_full from '../../assets/svg/running_program/polygon_needed_full.svg'

function RunningProgramBox(props) {
  
    return (
        <div className={`running-program-box ${props.rotated ? "reversed " : ""}`}>
            <div className={`${props.rotated ? 'running-program-box-index-rotated' : 'running-program-box-index '}`}>
                {props.index}
            </div>
            <div className='running-program-box-image-container'>
                <img 
                    className={
                        `  ${props.rotated ? "running-program-box-icon-rotated" :   'running-program-box-icon'}`
                    } src={props.icon} alt='icon'/>
                {props.middle ? 
                    (
                        <img className= { `running-program-box-hexagon ${props.rotated ? "rotated" :   ''} `} src={hexagon_full} alt='hexagon'/>
                    ): 
                    (
                        <img className={`running-program-box-hexagon ${props.isFlipped ? "flipped-horizontal" : ''}`} src={hexagon} alt='hexagon'/>
                    ) 
                }
            </div>
            <div className='running-program-box-content' >
                <div className='running-program-box-content-title' >
                    {props.title}
                </div>
                <div className='running-program-box-content-description'>
                    {props.description}
                </div>
            </div>
        </div>
    )
 
}

export default RunningProgramBox