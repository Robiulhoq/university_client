import React from 'react';
import ForamTopic from './ForamTopic';

const Foram = () => {
    const foramContent = [{
        "title": "Mota Group, Inc.",
        "ip_address": "205.122.146.83",
        "img": "http://dummyimage.com/29x27.png/ff4444/ffffff"
      }, {
        "title": "National Security Group, Inc.",
        "ip_address": "185.138.145.36",
        "img": "http://dummyimage.com/29x27.png/ff4444/ffffff"
      }, {
        "title": "DLH Holdings Corp.",
        "ip_address": "1.171.129.223",
        "img": "http://dummyimage.com/29x27.png/ff4444/ffffff"
      }, {
        "title": "Huron Consulting Group Inc.",
        "ip_address": "19.92.188.23",
        "img": "http://dummyimage.com/29x27.png/ff4444/ffffff"
      }, {
        "title": "HomeStreet, Inc.",
        "ip_address": "242.34.219.179",
        "img": "http://dummyimage.com/29x27.png/ff4444/ffffff"
      }, {
        "title": "Del Taco Restaurants, Inc.",
        "ip_address": "177.132.209.11",
        "img": "http://dummyimage.com/29x27.png/ff4444/ffffff"
      }]
    return (
        <div>
            <div className='d-flex justify-content-between'>
            <h5>Communite</h5>
            <button className='btn btn-primary'>Add New</button>
            </div>
            <div>
                {
                    foramContent.map((item) => <ForamTopic item={item} />)
                }
            </div>
    
        </div>
    );
};

export default Foram;