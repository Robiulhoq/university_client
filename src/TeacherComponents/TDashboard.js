import React, { useEffect, useState } from 'react';
import TSidebar from './TSidebar';
import './TDashboard.css';
import TopMenu from '../Components/TopMenu/TopMenu';
const TDashboard = () => {
    const [assinment, setAssinment] = useState([]);
    const [submitAssinments, setSubmitAssinments] = useState([]);
    const [totalClass, setTotalClass] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/assinment')
            .then(res => res.json())
            .then(data => setAssinment(data))
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/submitassinment')
            .then(res => res.json())
            .then(data =>
                setSubmitAssinments(data)

            )
    }, [submitAssinments]);
    useEffect(()=>{
        fetch('http://localhost:5000/class')
        .then(res => res.json())
        .then(data => setTotalClass(data))
    },[])

    return (
        <div className='container-fluid'>
            <div className="row">
                <div style={{ backgroundColor: '#ECC488', height: '120vh' }} className="col-md-2">
                    <TSidebar />
                </div>
                <div className="col-md-10">
                    <TopMenu/>
                    <div className="box_container d-flex justipy-content-between">
                        <div className="box bg-info h-100 m-2 ">
                            <h4 className='font-weight-bold'>Total Assinment: {assinment.length}</h4>
                        </div>
                        <div className="box bg-warning h-100 m-2">
                            <h4 className='font-weight-bold'>Submit Assinmet: {submitAssinments.length}</h4>
                        </div>
                        <div className="box bg-warning h-100 m-2">
                            <h4 className='font-weight-bold'>Total Class: {totalClass.length}</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TDashboard;