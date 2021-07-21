import React, { useState } from 'react';
import FormLogin from '../components/FormLogin';

import Alert from '@material-ui/lab/Alert';

export default function Login() {
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertError, setAlertError] = useState(false);

    const callback = (alert) => {
        if (alert === 'success') {
            setAlertSuccess(true);
            setAlertError(false);
        }
        else if (alert === 'error') {
            setAlertError(true);
            setAlertSuccess(false);
        }
    }

    return (
        <div>
            {
                alertSuccess ?  <Alert variant="filled" severity="success">Login berhasil!</Alert> : ""
            }
            {
                alertError ? <Alert variant="filled" severity="error">Email atau password salah</Alert> : ""
            }

            <div className="center mt-5">
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