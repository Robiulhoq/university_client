import React, { useContext, useState } from 'react';
import Popup from 'reactjs-popup';
import { LoginContext } from '../../App';

const AssinmentContent = (props) => {
    const { _id, name, driscription, subject, requirement, openDate, closeDate, expaction, marks, status } = props.item;
    const [login, setLogin] = useContext(LoginContext);
    const [uploadedFile, setUploadedFile] = useState('');
    const [assinmentSubmit, setAssinmentSubmit] = useState({
        assinmetId: _id,
        title: name,
        subject: subject,
        fileUrl: "",
        email: login.email,
        date: new Date('DD-MM-YYYY'),
        description: '',
        studentName: '',
        gradePoint: '',
        comment: ''
    });
    console.log(assinmentSubmit);

    const hendleChange = (e) => {
        const newSubmit = { ...assinmentSubmit }
        newSubmit[e.target.name] = e.target.value;
        setAssinmentSubmit(newSubmit)
    };
    const [upFile, setUpFile] = useState([]);
    console.log(upFile);
    const formData = new FormData()
    formData.append('file', upFile);
    const [loding, setLoding] = useState(false);
    const hendleUploadFile = () => {
        setLoding(true)
        fetch('http://localhost:5000/upload/uploadFile', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const oldValue = { ...assinmentSubmit }
                oldValue.fileUrl = data.url
                setAssinmentSubmit(oldValue)
                setLoding(false)
                alert("file Uploded successfully");
            })
    }

    const hendleSubmitAssinmet = (id, title, subject) => {
        setLoding(true)

        fetch('http://localhost:5000/submitassinment', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(assinmentSubmit)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Assinment Submited Successfully')
                    setLoding(false)
                }
            })



    }

    return (
        <div className='m-3 p-4 bg-white rounded'>
            <div className="d-flex justify-content-between">
                <h2>{name}</h2>
                <h6>{subject}</h6>
                <h6 className='text-success font-weight-bold'>MARKS:- {marks}</h6>
            </div>

            <p>{driscription}</p>
            <div className="d-flex justify-content-between">
                <a href='' download></a>
                <div className="date">
                    <h6>OPEN DATE:- {openDate}</h6>
                    <h6 className='text-danger'>CLOSE DATE:- {closeDate}</h6>
                </div>
            </div>
            <p>EXPACTATION</p>
            <ul><li>{expaction}</li></ul>
            {/* {status == 'false' ? */}

            <Popup trigger={<button className='btn btn-dark'> SUBMIT</button>} position="center center">
                <div style={{ width: '30rem', height: '33rem', backgroundColor: '#ebebeb' }} className='popup_content'>
                    <h3 className='text-info'>Upload Your Assinment</h3>
                    {
                        loding === true ?
                            <h1>Lodinggg...</h1> :
                            null
                    }
                    <label htmlFor="">Have any file?</label>
                    <div className="d-flex">
                        <input className='form-control' onChange={(e) => setUpFile(e.target.files[0])} placeholder='Have any file?' type="file" name="upFile" id="" />
                        <input className='btn btn-success' onClick={hendleUploadFile} type="button" value="Upload File" />
                    </div>
                    <br />
                    <input className='form-control' onBlur={hendleChange} name='studentName' type="text" placeholder='Your Name' /> <br />
                    <textarea name="description" onBlur={hendleChange} id="" cols="55" rows="10"></textarea> <br />
                    
                    

                    <input className='btn btn-primary m-3' onClick={() => hendleSubmitAssinmet(_id, name, subject)} value="SUBMIT" type="submit" />
                </div>
            </Popup>
            {/* <p>All Ready Submited</p> */}
            {/* } */}


        </div>
    );
};

export default AssinmentContent;