import React, { useContext } from 'react';
import EnroleCourse from '../EnroleCourse/EnroleCourse';
import Foram from '../Foram/Foram';
import Sidebar from '../Sidebar/Sidebar';
import Todo from '../Todo/Todo';
import './Dashboard.css';
import { LoginContext } from '../../App';
import TopMenu from '../TopMenu/TopMenu';
const Dashboard = () => {
    const [login, setLogin] = useContext(LoginContext);
    return (
        <div style={{backgroundColor: '#8A39E1'}} className='container-fluid'>
            <div className="row">
                <div style={{backgroundColor: '#ECC488'}} className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 dashboard_course">
                    <TopMenu/>
                    <h3 className='p-3' >{login.name} your enrolled course</h3>
                    <EnroleCourse />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <Todo />
                            </div>
                            <div className="col-md-6 pt-4 mt-3 foram_container">
                                <Foram />
                            </div>
                        </div>
                    </div>
                    <div className='footer_container p-3 mt-3'>
                        <h4>Footer</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;