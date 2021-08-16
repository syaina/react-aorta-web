import React, { useState } from 'react';

import FormBooking from '../components/FormBooking';
import Stepper from '../containers/Stepper';

import Alert from '@material-ui/lab/Alert';

export default function DaftarKelas() {
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

            <div className="center mt-5 container ">
                <div className="bg-white border-primary py-5 width-auto">
                    <h3 className="font-secondary font-color-black font-weight-normal">Booking Kelas</h3>
                    {/* <FormBooking parentCallback = {callback} /> */}
                    <Stepper />
                </div>
            </div>
        </div>
    );
}