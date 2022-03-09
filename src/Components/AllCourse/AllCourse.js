import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Sidebar from '../Sidebar/Sidebar';
import TopMenu from '../TopMenu/TopMenu';

const AllCourse = () => {
    
      const [allCourse, setAllCourse] = useState([]);
   useEffect(()=>{
    fetch('http://localhost:5000/course')
    .then(res => res.json())
    .then(data => setAllCourse(data))
   },[])
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-2"  style={{backgroundColor: '#ECC488'}}>
                    <Sidebar/>
                </div>
                <div className="col-md-10 ">
                    <TopMenu/>
                { allCourse.map(couser => <Course item={couser}/>)
                    
                }
                </div>
            </div>
        </div>
    );
};

export default AllCourse;