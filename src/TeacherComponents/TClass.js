import React, { useState } from 'react';
import TopMenu from '../Components/TopMenu/TopMenu';
import TSidebar from './TSidebar';
const TClass = () => {
    const [classTopic, setClassTopic] = useState({
        topic: '',
        overView: '',
        drescrption: '',
        subject: '',
        status: ''
    });

    const hendleChange = (e) => {
        const oldValue = { ...classTopic }
        oldValue[e.target.name] = e.target.value
        setClassTopic(oldValue)
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
    })
 
    const hendleCreateTopic = (e) => {
        
        if(!classTopic.subject == ''){
            fetch('http://localhost:5000/class', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(classTopic)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setSuccess(privious => {
                        return {
                            ...privious, message: data.message,
                            status: true
                        }
                    });
                    
                    setClassTopic({
                        topic: '',
                        overView: '',
                        drescrption: '',
                        subject: '',
                        status: ''
                    })
                    console.log(classTopic);
                }
            })
        } else{
            alert('your input field is not valied')
        }
    }
    return (
        <div className='container-fluid'>
            <div className="row">
                <div style={{ backgroundColor: '#ECC488', height: '120vh' }} className="col-md-2">
                    <TSidebar />
                </div>
                <div className="col-md-10">
                    <TopMenu />
                    <div className="class_input_field m-3 p-2 w-50">
                        {
                            success.status === true ?
                                <p className='text-success'>Class Create Successfully!</p> : null
                        }
                        <h1 className='text-info'>CREATED CLASS TOPIC</h1>
                        <input onChange={hendleChange} className='form-control m-2' type="text" name='topic' placeholder='Name Of Topic' />
                        <input onChange={hendleChange} className='form-control m-2' type="text" name='overView' placeholder='Topic Overview' />
                        <input onChange={hendleChange} className='form-control m-2' type="text" name='drescrption' placeholder='Driscription' />
                        <select name="subject" id="" onChange={hendleChange} className='form-control m-2'>
                            <option value="english">English</option>
                            <option value="math">Math</option>
                            <option value="communication">Communication</option>
                        </select>
                        <input onChange={hendleChange} className='form-control m-2' type="text" name='status' placeholder='Status' />
                        <input onClick={hendleCreateTopic} type="button" className='form-control btn-success m-2' value="SUBMIT" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TClass;