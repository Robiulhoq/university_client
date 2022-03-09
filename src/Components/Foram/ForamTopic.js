import React from 'react';
import './ForamTopic.css';
const ForamTopic = ({item}) => {
    return (
        <div className='d-flex justify-content-between'>
           <div className="profile_title d-flex justify-content-around m-2">
               <img src={item.img} alt="" />
                <h6>{item.title}</h6>
           </div>
           <button className='btn'>See More..</button>
        </div>
    );
};

export default ForamTopic;