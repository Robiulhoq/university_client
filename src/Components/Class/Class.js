import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ClassSummary from './ClassSummary';
import './Class.css';
import TopMenu from '../TopMenu/TopMenu';
import { LoginContext } from '../../App';
const Class = () => {
  const [login, setLogin] = useContext(LoginContext);
     const [classSummary, setClassSummary] = useState([]);
     const [subject, setSubject] = useState('');
     useEffect(()=>{
       fetch(`http://localhost:5000/class/${login.email}/${subject}`)
       .then(res => res.json())
       .then(data => setClassSummary(data))
     },[subject])
    return (
        <div  style={{backgroundColor: '#B667F1'}} className='container-fluid'>
            <div className="row">
                <div style={{backgroundColor: '#ECC488'}} className="col-md-2 dashboard_sidebar">
                    <Sidebar/>
                </div>
                <div className="col-md-10 class_topic">
                  <TopMenu/>
                      <div className="course m-5">
                        <select onChange={(e)=> setSubject(e.target.value)} name="" id="">
                          <option selected value="english">English</option>
                          <option  value="communication">Communication</option>
                          <option value="math">Math</option>
                        </select>
                      </div>
                        { classSummary.length?
                            classSummary.map((item) => <ClassSummary item={item}/>)
                       : <h6 className='m-5'>Please Select Your Course</h6> }
                </div>
            </div>
                
        </div>
    );
};

export default Class;