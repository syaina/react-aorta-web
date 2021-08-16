import React, {useEffect, useState} from 'react';
import axios from 'axios';

import AuthService from '../services/auth.service';

export default function RiwayatKelas () {
    const [riwayatKelas, setRiwayatKelas] = useState([])
    const [booking, setBooking] = useState([])
    const [produk, setProduk] = useState([])
    const id_user = AuthService.getUser()

    useEffect(() => {
        const axios1 = axios.get('/booking/user/' + id_user);
        const axios2 = axios.get('/produk');

        axios1.then((response) => {
            if(response.status === 200) {
                let respBooking = [];

                response.data.results.map((result) => {
                    respBooking.push({
                        id_produk: result.id_produk,
                        tanggal: result.tanggal,
                        status: result.status
                    });

                    // if(result.id_produk != 'other') {
                       
                    //     const axios2 = axios.get('/produk/' + result.id_produk);
                    //     axios2.then((res) => {
                    //         let respProduk = [];
                            
                    //         if(res.status === 200) {
                    //             console.log(res.data.results.produk, result.id_produk)
                    //             respProduk.push({
                    //                 id_produk: res.data.results.id_produk,
                    //                 produk: res.data.results.produk
                    //             });
                    //         }

                    //         setProduk(respProduk)
                    //     })
                    //     axios2.catch(function (error) {

                    //     })

                    // } else {
                        // respKelas.push({
                        //     id_produk: result.id_produk,
                        //     tanggal: result.tanggal,
                        //     status: result.status,
                        //     produk: 'Lainnya'
                        // });
                    // }
                });
                setBooking(respBooking); 
            }
        
        })
        axios1.catch(function (error) {
            console.log(error);
        })

        axios2.then((response) => {
            // console.log(response)
            let respProduk = [];
            
            if(response.status === 200) {
                response.data.results.map((result) => {
                    respProduk.push({
                        id_produk: result.id_produk,
                        produk: result.produk
                    });
                })
            }
            // console.log(respProduk)
            setProduk(respProduk)
        })
        axios2.catch(function (error) {

        })

        // mergeTwoArrays()

    }, [])

    // useEffect(() => {
    //     // setBooking(
    //         booking.map((item, index) => 
    //             // item.id_produk === produk.map((data) => data.id_produk)
    //             // ? console.log('sama')
    //             // : console.log('beda')
    //             console.log('sama')
    //         )
    //     // )
    // }, [])

    // const mergeTwoArrays = () => {
    //     console.log(produk.filter((prod) => prod.id_produk == 'PRD-000001'))
    //     console.log(produk)
    // }



    return (
        <div>
            {/* {
                booking.map((book, index) => (
                    <p>{index+1}. {book.id_produk} -  
                        {
                            produk.map((prod) => {
                                prod.id_produk === book.id_produk 
                                ? <span>Sama</span>
                                : <span>Beda</span>
                            })
                        }
                    </p>
                ))

            }
            {
                produk.map((item, index) => (
                    <p>Produk {item.produk}</p>
                ))
            } */}
        </div>
    )
}