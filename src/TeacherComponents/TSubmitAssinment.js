import React, { useEffect, useState } from 'react';
import TSidebar from './TSidebar';
import TopMenu from '../Components/TopMenu/TopMenu'
import TSubAssinmentItem from './TSubAssinmentItem';
const TSubmitAssinment = () => {
    const [submitedAssinment, setSubmitedAssinment] = useState([]);
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/submitassinment')
            .then(res => res.json())
            .then(data => setSubmitedAssinment(data))
    },[]);
   
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-2">
                    <TSidebar/>
                </div>
                <div className="col-md-10">
                    <TopMenu/>
                    <table className="table mt-4 p-5 border rounded">
                        <thead>
                            <tr>
                                <th scope="col">NAME</th>
                                <th scope='col'>EMAIL</th>
                                <th scope="col">GREAD POINT</th>
                                <th scope="col">COMMENT</th>
                                <th scope="col">STATUS</th>
                            </tr>
                        </thead>
                        {
                            submitedAssinment.map((assinments, index) => <TSubAssinmentItem item={assinments} key={index}/>)
                        }
                        
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default TSubmitAssinment;