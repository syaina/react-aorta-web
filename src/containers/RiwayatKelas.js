import React, {useEffect, useState} from 'react';
import axios from 'axios';

import AuthService from '../services/auth.service';

export default function RiwayatKelas () {
    const [riwayatKelas, setRiwayatKelas] = useState([])
    const id_user = AuthService.getUser()

    useEffect(() => {
        const endpoint = '/booking/user/' + id_user;

        axios.get(endpoint)
        .then((response) => {
            console.log(response)
            if(response.status === 200) {
                let resp = [];

                response.data.results.map((result) => {
                    resp.push({
                        id: result.id,
                        id_produk: result.id_produk,
                        tanggal: result.tanggal,
                        status: result.status
                    });
                    // getProduk(result.id_produk)
                 });

                setRiwayatKelas(resp); 
            }
            
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])
    return (
        <div>
            Riwayat Kelas
        </div>
    )
}