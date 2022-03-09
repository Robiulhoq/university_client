import React from 'react';

const ClassSummary = ({ item }) => {
    return (
        <div className='class_summary_container m-5 p-3 bg-white rounded'>
            <div className='d-flex justify-content-between'>
                <h2 className='text-info'>Topic: {item.topic}</h2>
                <h6>Subject: {item.subject}</h6>
                <select name="" id="">
                    <option value="Not done">Not Done</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <p> Overview: {item.overView}</p>
            <p>{item.drescrption}</p>
            <a href={item.file} download></a>
        </div>
    );
};

export default ClassSummary;