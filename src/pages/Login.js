import React from 'react';
import FormLogin from '../components/FormLogin';

export default function Login() {
    return (
        <div>
            <div className="container center bg-butterscotch">
                <div className="bg-white">
                    <h3 className="font-secondary">Masuk ke</h3>
                    <FormLogin />
                </div>
            </div>
        </div>
    );
}