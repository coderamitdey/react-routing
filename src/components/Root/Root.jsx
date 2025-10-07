import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './Root.css'

const Root = () => {
    return (
        <div className='root-main'>
            <Header></Header>
            <div>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;