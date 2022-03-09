import React from 'react';
import { Link } from 'react-router-dom';

const TSidebar = () => {
    return (
        <div className='sidebar_container'> <br />
        <Link className='btn' to='/teacher/dashboard'><span><i className="fas fa-home"></i></span> DASHBOARD<br /> <br /></Link>
        <Link to='/teacher/course' className='btn'><span><i class="fas fa-graduation-cap"></i></span> COURSE <br /><br /></Link>
        <Link to='/teacher/assinment' className='btn'><span><i class="far fa-newspaper"></i></span> ASSINMENT <br /> <br /></Link>
       <Link to='/teacher/submitassinment' className='btn'>  <span><i className='far fa-book-reader'></i></span> CHECK ASSINMENT <br /> <br /></Link>
       <Link to='/teacher/class' className='btn'>  <span><i className='far fa-book-reader'></i></span> CLASS <br /> <br /></Link>
    </div>
    );
};

export default TSidebar;