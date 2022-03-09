import React, { useState } from 'react';
import TSidebar from './TSidebar';

const TAssinment = () => {
    const [assinment, setAssinment] = useState({
        name: '',
        subject: '',
        marks: '',
        driscription:'',
        requirment: '',
        expaction: '',
        openDate: '',
        closeDate: ''
    });
    console.log(assinment)
    const hendleChange = (e) =>{
        const oldValue = {...assinment}
        oldValue[e.target.name] = e.target.value
        setAssinment(oldValue);
        setSuccess(privious => {
            return {
                ...privious, message: '',
                status: false
            }
        });
    };
    const [success, setSuccess] = useState({
        message: '',
        status: false
    });
   
    const hendleProviedAssinment = () =>{
       if(!assinment.subject == ''){
        fetch('http://localhost:5000/assinment', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(assinment)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                setSuccess(privious => {
                    return {
                        ...privious, message: data.message,
                        status: true
                    }
                });
            }
        })
       } else{
           alert('Input field is not valided')
       }
    }
    return (
        <div className='container-fluid'>
            <div className="row">
                <div style={{ backgroundColor: '#ECC488', height: '120vh' }} className="col-md-2">
                    <TSidebar />
                </div>
                <div className="col-md-10">
                    <div style={{width: '50%'}} className="assinmet_input_box m-3 p-3">
                    {
                            success.status === true ?
                                <p className='text-success'>Assinment Create Successfully!</p> : null
                        }
                        <h2 className='p-1 m-2 text-info'>PROVIED ASSINMENT</h2>
                        <input onChange={hendleChange} className='form-control p-1 m-2' type="text" name='name' placeholder='Assinment Name' />
                        <select onChange={hendleChange} className='form-control p-1 m-2'  name="subject" id="">
                            <option value="english">English</option>
                            <option value="math">Math</option>
                            <option value="communication">Comunication</option>
                        </select>
                        <input onChange={hendleChange} className='form-control p-1 m-2' type="number" name='marks' placeholder='Marks' />
                        <textarea onChange={hendleChange} className='form-control p-1 m-2' placeholder='Driscription' name="driscription" id="" cols="30" rows="5"></textarea>
                        <textarea onChange={hendleChange} className='form-control p-1 m-2' placeholder='Requirement' name="requirment" id="" cols="10" rows="5"></textarea>
                        <input onChange={hendleChange} className='form-control p-1 m-2' type="text" name='expaction' placeholder='expaction' />
                        <label onChange={hendleChange} className='p-1 m-2' htmlFor="">Open Date</label>
                        <input className='form-control' type="date" data-date="" data-date-format="DD MMMM YYYY" name='openDate' onChange={hendleChange} defaultValue="2022-03-01"/>
                        <label onChange={hendleChange} className=' m-2' htmlFor="">Close Date</label>
                        <input className='form-control' type="date" data-date="" data-date-format="DD MMMM YYYY" name='closeDate' onChange={hendleChange} defaultValue="2022-03-01"/>
                        <input onClick={hendleProviedAssinment} className='form-control btn-success p-1 m-2' type="button" value="SUBMIT"/>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default TAssinment;