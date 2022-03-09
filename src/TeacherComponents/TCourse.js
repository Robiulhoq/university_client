import React, { useEffect, useState } from 'react';
import TopMenu from '../Components/TopMenu/TopMenu';
import TSidebar from './TSidebar';
import './TCourse.css';
import Course from '../Components/Course/Course';
const TCourse = () => {
    const [courseFile, setCourseFile] = useState([]);
    const formData = new FormData();
    formData.append('file', courseFile);
    const [courseTitle, setCourseTitle] = useState({
        title: '',
      
    })
    console.log(courseTitle);
    const hendleCourseUpload = () =>{
        fetch('http://localhost:5000/upload/uploadFile',{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.url){
            
                fetch('http://localhost:5000/course', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: courseTitle,
                        imgLink: data.url
                    })
                    
                })
                .then(res => res.json())
                .then(data => console.log(data))
            }
        })
    };

    const [allCourse, setAllCourse] = useState([]);
    useEffect(()=>{
     fetch('http://localhost:5000/course')
     .then(res => res.json())
     .then(data => setAllCourse(data))
    },[])
    return (
        <div className='container-fluid'>
            <div className="row">
                <div style={{ backgroundColor: '#ECC488', height: '120vh' }} className="col-md-2">
                    <TSidebar />
                </div>
                <div className="col-md-10">
                    <TopMenu />
                    <h3 className='text-info m-3 p-3'>ADD YOUR COURSE</h3>
                    <div className="container">
                        <div className="course_input_box m-3 p-3">
                                <label htmlFor="">Upload Course Image</label>
                                <input onChange={(e)=>setCourseFile(e.target.files[0])} className='form-control' type="file" />
                                <br />
                                <input onChange={(e)=> setCourseTitle(e.target.value)} name='title' className='form-control' type="text" placeholder='Course Title' />
                                <input onClick={hendleCourseUpload} className='btn btn-success mt-3' type="button" name="" id="" value="SIBMIT" />
                        </div>
                    </div>
                 <div style={{ flex: '1 0 21%'}} className="d-flex">
                 { allCourse.map(couser => <Course item={couser}/>)
                    
                }
                     </div>
                </div>
            </div>

        </div>
    );
};

export default TCourse;