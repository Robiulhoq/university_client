import React from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar/Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar_container'> <br />
            <Link className='btn' to='/'><span><i className="fas fa-home"></i></span> DASHBOARD<br /> <br /></Link>
            <Link to='/allcourse' className='btn'><span><i class="fas fa-graduation-cap"></i></span> COURSE <br /><br /></Link>
            <Link to='/assinment' className='btn'><span><i class="far fa-newspaper"></i></span> ASSINMENT <br /> <br /></Link>
           <Link to='/submitassinment' className='btn'>  <span><i className='far fa-book-reader'></i></span> CHECK ASSINMENT <br /> <br /></Link>
           <Link to='/class' className='btn'>  <span><i className='far fa-book-reader'></i></span> CLASS <br /> <br /></Link>
        </div>
    );
};

export default Sidebar;