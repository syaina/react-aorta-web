import React, {useEffect, useState} from 'react';
import axios from 'axios';

import AuthService from '../services/auth.service';

export default function MyAccount () {
    const [user, setUser] = useState({})
    const token = AuthService.getToken()

    useEffect(() => {
        const endpoint = '/user/token/' + token;

        axios.get(endpoint)
        .then((response) => {
            console.log(response)
            if(response.status === 200) {
                let result = response.data.results;

                setUser({
                    nama: result.nama,
                    email: result.email,
                    pekerjaan: result.pekerjaan,
                    asal_universitas: result.asal_universitas
                })
            }
            
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    return (
        <div>
            <div className="text-field-container">
                <label>Nama</label>
                <input type="text" name="" id="" value={user.nama} disabled/>
            </div>
            <div className="text-field-container">
                <label>Email</label>
                <input type="text" name="" id="" value={user.email} disabled/>
            </div>
            <div className="text-field-container">
                <label>Pekerjaan</label>
                <input type="text" name="" id="" value={user.pekerjaan} disabled/>
            </div>
            <div className="text-field-container">
                <label>Asal Universitas</label>
                <input type="text" name="" id="" value={user.asal_universitas} disabled/>
            </div>
            <div className="center">
                <button className="btn btn-primary mt-3">Ubah Profil</button>
            </div>
        </div>
    )
}