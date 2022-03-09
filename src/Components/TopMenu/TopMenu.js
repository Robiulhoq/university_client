import React, { useContext } from 'react';
import { LoginContext } from '../../App';
import logo from '../../image/university_logo.png';
const TopMenu = () => {
    const [login, setLogin] = useContext(LoginContext);
    return (
        <div className="top_manu d-flex justify-content-between">
            <img src={logo} alt="" />
            <h4 className='mt-4'>DUMMY INTERNATIONAL UNIVIRSITY</h4>
            <p className='mt-4'>{login.name}</p>
        </div>
    );
};

export default TopMenu;