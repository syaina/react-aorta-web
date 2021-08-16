import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Spinner from '../components/Spinner';

export default function Materi () {
    const [loading, setLoading] = useState(true)
    const [materi, setMateri] = useState([])

    useEffect(() => {
        const endpoint = '/materi';

        axios.get(endpoint)
        .then((response) => {
            if(response.status == 200) {
                let resp = [];

                response.data.results.map((result) => {
                    resp.push({
                        id: result.id,
                        id_materi: result.id_materi,
                        judul_materi: result.judul_materi,
                        slug: result.slug,
                        url_gambar: result.url_gambar
                    });
                 });

                setMateri(resp);
                setLoading(false)
            }
            
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    if (loading) return <Spinner/>

    return (
        <div className="container mt-5">
            <h3 className="pb-5 center">Materi</h3>
            <Grid container spacing={3}>
                {
                    materi.map((m) => (
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <Link to={`/latihan-soal/${m.slug}`}>  
                                <div class="card box-shadow py-3 px-3">
                                    <div class="card-img-container">
                                        <img src={`${m.url_gambar}`} alt="" />
                                    </div>
                                    <p className="font-weight-bold pb-2 pt-3">{m.judul_materi}</p>
                                </div>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}