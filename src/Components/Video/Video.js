import React from 'react';
import './Video.css'

const Video = () => {
    
    return (
        <div className='video'>
            <iframe 
                width="1280" 
                height="420" 
                src="https://www.youtube.com/embed/_MXtbjwsz3A" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Video
