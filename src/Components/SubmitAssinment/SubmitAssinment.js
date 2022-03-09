import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import TopMenu from '../TopMenu/TopMenu';

const SubmitAssinment = () => {
    const [login, setLogin] = useContext(LoginContext);
    const [submitedAssinment, setSubmitedAssinment] = useState([]);
    console.log(submitedAssinment);
    const email = login.email;
    useEffect(() => {
        fetch(`http://localhost:5000/submitassinment/${email}`)
            .then(res => res.json())
            .then(data => setSubmitedAssinment(data))
    },[email]);
    return (
        <div style={{backgroundColor: '#B667F1'}} className='container-fluid'>
            <div className="row">
                <div className="col-md-2 dashboard_sidebar">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <TopMenu/>
                    <table class="table mt-4 p-5 border rounded">
                        <thead>
                            <tr>
                                <th scope="col">NAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">GREAD POINT/Marks</th>
                                <th scope="col">Teacher COMMENT</th>
                            </tr>
                        </thead>
                        {
                            submitedAssinment.map(assinments => <tbody>
                                <tr>
                                    <td>{assinments.title}</td>
                                    <td>{assinments.email}</td>
                                    <td>{assinments.gradePoint}</td>
                                    <td>{assinments.comment}</td>
                                </tr>
                            </tbody>)
                        }
                        
                    </table>

                </div>
            </div>
        </div>
    );
};

export default SubmitAssinment;