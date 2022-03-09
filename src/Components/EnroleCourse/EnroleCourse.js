import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../App';
import Course from '../Course/Course';

const EnroleCourse = () => {
    const [login, setLogin] = useContext(LoginContext);
 const [enrollCourse, setEnrollCourse] = useState([]);
 useEffect(()=>{
      fetch('http://localhost:5000/enroll', {
          method: 'POST',
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify({email: login.email})
      })
      .then(res => res.json())
      .then(data => {
          setEnrollCourse(data)
      })
 },[])
    return (
        <div className=' d-flex'>

                 { enrollCourse.length?
                 
                 enrollCourse.map(couser => <Course item={couser}/>): null
                    
                  }
                    
                
        </div>
        
    );
};

export default EnroleCourse;