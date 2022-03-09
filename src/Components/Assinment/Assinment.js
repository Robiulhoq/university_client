import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import TopMenu from '../TopMenu/TopMenu';
import AssinmentContent from './AssinmentContent';

const Assinment = () => {
  const [assinments, setAssinments] = useState([]);
  const [login, setLogin] = useContext(LoginContext);
  const [subject, setSubject] = useState('');
  console.log(subject);
  useEffect(()=>{
    fetch(`http://localhost:5000/assinment/${login.email}/${subject}`)
    .then(res => res.json())
    .then(data => setAssinments(data))
  },[subject])
   
    return (
        <div style={{backgroundColor: '#8A39E1'}} className='container-fluid'>
            <div className="row">
                <div  style={{backgroundColor: '#ECC488'}} className="col-md-2 dashboard_sidebar">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                  <TopMenu/>
                <div className="course m-5">
                        <select onClick={(e)=> setSubject(e.target.value)} name="" id="">
                          <option  value="communication">Communication</option>
                          <option value="english">English</option>
                          <option value="math">Math</option>
                        </select>

                      </div>

                    { assinments.length?
                        assinments.map((assinment) => <AssinmentContent item={assinment}/>)
                   : <h6 className='m-5'>Please Select Your Course</h6> }
                </div>
            </div>
            
        </div>
    );
};

export default Assinment;