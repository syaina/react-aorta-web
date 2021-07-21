import React, { useState } from 'react';

import FormSignup from '../components/FormSignup';
import Alert from '@material-ui/lab/Alert';

export default function Signup () {
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
                alertSuccess ?  <Alert variant="filled" severity="success">Akun Berhasil terdaftar. Redirect ke halaman login...</Alert> : ""
            }
            {
                alertError ? <Alert variant="filled" severity="error">Akun sudah terdaftar. Gunakan email yang lain.</Alert> : ""
            }

            <div className="center mt-3">
                <div className="bg-white border-primary py-4 width-auto">
                    <h3 className="pt-1 pb-3 font-secondary font-color-black font-weight-normal">Buat Akun</h3>
                    <FormSignup parentCallback = {callback} />
                    
                    <div className="font-small mt-3">
                        <p className="py-1">Sudah punya akun?</p>
                        <a className="link" href="/login">Login Akun</a>
                    </div> 
                </div>
            </div>
        </div>
     
    );
}