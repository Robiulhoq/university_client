import React, { useContext, useState } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { LoginContext } from '../../App';
import { useNavigate, useLocation, Link } from 'react-router-dom';

 firebase.initializeApp(firebaseConfig);
const Login = () => {
    const history = useNavigate();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const [login, setLogin] = useContext(LoginContext)
    const [newUser, setNewUser] = useState(false);
    const [newUserInfo, setNewUserInfo] = useState({
        name: '',
        email: '',
        password: ''
    });
    
    const hendleChange = e => {
        const user = { ...newUserInfo };
        user[e.target.name] = e.target.value;
        setNewUserInfo(user)
    };
    const auth = getAuth();
    const hendleCreateUser = () => {
        createUserWithEmailAndPassword(auth, newUserInfo.email, newUserInfo.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                if (user) {
                    updateProfile(auth.currentUser, {
                        displayName: newUserInfo.name
                    }).then(() => {
                            setLogin({
                                name: user.displayName,
                                email: user.email
                            });
                            history(from)
                    }).catch((error) => {
                        // An error occurred
                        console.log(error);
                        // ...
                    });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    }
    const hendleLogin = () => {
        signInWithEmailAndPassword(auth, newUserInfo.email, newUserInfo.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setLogin({
                    name: user.displayName,
                    email: user.email
                });
                history(from)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
    return (
        <div className='container-fluid login_container d-flex justify-content-center align-items-center'>
            {
                newUser == false ?
                    <div className="login_input_field">
                        <input onChange={hendleChange} name='email' type="text" placeholder='EMAIL' /> <br />
                        <input onChange={hendleChange} name='password' type="password" placeholder='PASSWORD' />
                        <input type="button" onClick={hendleLogin} className='btn btn-danger' value="LOGIN" />
                        <div className="d-flex Sing_Up">
                            <p>Don't Have an account?</p>
                            <a href="" onClick={(e) => { e.preventDefault(); setNewUser(true) }} >Sing Up</a>
                            <button className='btn btn-dark'> <Link to='/login/teacher'>Are You Teacher?</Link> </button>
                        </div>
                    </div>
                    : <div className="login_input_field">
                        <input onChange={hendleChange} name='name' type="text" placeholder='NAME' /> <br />
                        <input onChange={hendleChange} name='email' type="text" placeholder='EMAIL' /> <br />
                        <input onChange={hendleChange} name='password' type="password" placeholder='PASSWORD' />
                        <input type="button" onClick={hendleCreateUser} className='btn btn-dark' value="SING UP" />
                        <div className="d-flex Sing_Up">
                            <p>Have an account?</p>
                            <a href="" onClick={(e) => { e.preventDefault(); setNewUser(false) }} >LOGIN</a>
                            <button className='btn btn-dark'>Are You Teacher?</button>
                        </div>
                    </div>}
        </div>

    );
};

export default Login;