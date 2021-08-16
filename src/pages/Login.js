import React, { useState } from 'react';

import FormLogin from '../components/FormLogin';
import AlertMessage from '../components/AlertMessage';

export default function Login() {
    const [severity, setSeverity] = useState();
    const [message, setMessage] = useState();
    const [isAlert, setAlert] = useState(false);

    const callback = (alert) => {
        if (alert === 'success') {
            setSeverity("success");
            setMessage("Login berhasil!");
            setAlert(true)
        }
        else if (alert === 'error') {
            setSeverity("error");
            setMessage("Email atau password salah");
            setAlert(true)
        }

    }

    return (
        <div>
            { isAlert ? <AlertMessage severity={severity} message={message}/> : null }

            <div className="center mt-5 container">
                <div className="bg-white border-primary py-5 width-auto">
                    <h3 className="font-secondary font-color-black font-weight-normal">Login Akun</h3>
                    <FormLogin parentCallback = {callback} />
                    
                    <div className="font-small mt-3">
                        <p className="py-1">Belum punya akun?</p>
                        <a className="link" href="/daftar">Buat Akun</a>
                    </div> 
                </div>
            </div>
        </div>
    );
}