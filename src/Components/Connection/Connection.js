import React from 'react'

import './Connection.css';

const Connection = ({icon, heading, text}) => {
    return (
        <div className='connection__main'>
            <div className='connection'>
                {icon}
            </div>
            <div className='connection__text'>
                <span className='first__Heading'>{heading}</span><br />
                <span className='second__Heading'>{text}</span>

            </div>
            
            
        </div>

    )
}

export default Connection
