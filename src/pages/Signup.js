import React from 'react';
// import Header from '../components/Header/Header';
import FormSignup from '../components/FormSignup';
//import '../assets/default.css';


import axios from 'axios';
// import { CookiesProvider, useCookies } from 'react-cookie';

export default function Signup () {
    return (
        <div id="main">
            {/* <Header/> */}
            <div id="content" className="width--medium">
                <div className="container bg-shadow">
                    <h2 className="text--center">Daftar ke</h2>
                    <div className="logo-wrapper text--center">
                        <img src="../image/Logo Loak.png" alt=""/>
                    </div>
                    <FormSignup />
                </div>
            </div>
        </div>
    );
}