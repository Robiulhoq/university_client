import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../App';

const TeacherAuth = () => {
    const [login, setLogin] = useContext(LoginContext);
    const history = useNavigate();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/teacher/dashboard" } };
    const [teacher, setTeacher] = useState({
        email: '',
        password: ''
    });
    const hendleChange = e => {
        const user = { ...teacher };
        user[e.target.name] = e.target.value;
        setTeacher(user)
    };
    const hendleLogin =() =>{
        fetch('http://localhost:5000/teacher', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(teacher)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                data.map(user => {
                     setLogin({
                    email: user.email
                });
                })
              history(from)
            }
        })

    }
    return (
        <div className='container-fluid login_container d-flex justify-content-center align-items-center'>
        <div className="login_input_field">
        <input onChange={hendleChange} name='email' type="text" placeholder='EMAIL' /> <br />
        <input onChange={hendleChange} name='password' type="password" placeholder='PASSWORD' />
        <input type="button" onClick={hendleLogin} className='btn btn-danger' value="LOGIN" />
        <div className="d-flex Sing_Up">
            <p>Don't Have an account? Contact Your Adminastator</p>
            {/* <a href="" onClick={(e) => { e.preventDefault(); setNewUser(true) }} >Sing Up</a> */}
           <button className='btn btn-dark'> <Link to='/login'>Student?</Link></button>
        </div>
        </div>
        </div>
    );
};

export default TeacherAuth;