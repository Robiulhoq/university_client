import React, { useContext, useState } from 'react';
import Popup from 'reactjs-popup';
import { LoginContext } from '../../App';
import TopMenu from '../TopMenu/TopMenu';
import './Course.css'
const Course = ({ item }) => {
  const [login, setLogin] = useContext(LoginContext);
  const [enroll, setEnroll] = useState({
    id: '',
    password: '',
    email: login.email,
    title: item.title.toLowerCase(),
    imgLink: item.imgLink
  });
  const hendleChange = (e) =>{
      const newEnroll = {...enroll}
      newEnroll[e.target.name] = e.target.value;
      setEnroll(newEnroll)
  }
  const hendleEnrollCourse = (id, e) =>{
  
    fetch(`http://localhost:5000/enroll/${id}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(enroll)

    })
    .then(res => res.json())
    .then(data => console.log(data))
  }


  return (
   <div className="container-fluid">
      <div className="row justify-content-between">
      <ul className="cards">
  <li>
    <a  className="card">
      <img src={item.imgLink} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <h5>{item.title}</h5>
          <div className="card__header-text">
          {
         item.email? null : <Popup trigger={<button className='btn btn-success'> Enroll Now</button>} position="center center">
            <div className='popup_content'>
              <p className='text-info'>You need to get the id and password from the teacher</p>
              <p className='text-info'>For demo: id: 12345678 password: 12345678, please don't misuse</p>
              <input className='form-control' onChange={hendleChange} name='id' type="text" placeholder='ID' /> <br />
              <input className='form-control' onChange={hendleChange} name='password' type="password" placeholder='PASSWORD' /> <br />
              <input className='btn btn-primary' onClick={()=>hendleEnrollCourse(item._id)} value="SUBMIT" type="submit" />
            </div>
          </Popup>
        }
          </div>
        </div>
      </div>
    </a>      
  </li>
  </ul>
    </div>
   </div>
  );
};

export default Course;