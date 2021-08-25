import React from 'react';
import './Date.css';

const Blog = ({date, month, tittle}) => {
    return (
        <div className="blog">
            <div className='blog__dates'>
                <div className='blog__month'>{month}</div>
                <div className='blog__date'>{date}</div>
            </div>
            <div className='blog__heading'>
                <a href=''><span>{tittle}</span></a>
            </div>
        </div>
    )
}

export default Blog
