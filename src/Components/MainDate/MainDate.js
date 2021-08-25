import React from 'react';
import './MainDate.css';

const MainDate = () => {
    return (
        <>
        <div className="main">
            <div className='main__dates'>
                <div className='main__month'>Sep 29 - Sep 30</div>
                <div className='main__date'>9:00 am</div>
                
            </div>
        </div>
        <span className='main__heading'>DevOps World <br /> Online</span>
        <span className='main__small'>Jenkins will be represented at the <br />DevOps World conference. There will <br /> be community and continuous...</span>
        </>
    )
}

export default MainDate;
