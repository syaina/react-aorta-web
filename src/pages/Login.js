import React from 'react';
import FormLogin from '../components/FormLogin';

export default function Login() {
    return (
        <div id="main">
            <div id="content" className="width--medium">
                <div className="container bg-shadow">
                    <h2 className="text--center">Masuk ke</h2>
                    <div className="logo-wrapper text--center">
                        <img src="../image/Logo Loak.png" alt=""/>
                    </div>
                    <FormLogin />
                </div>
            </div>
        </div>
    );
}