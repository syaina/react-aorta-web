import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Link, useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Spinner from '../components/Spinner';

export default function Bab () {
    const { materi } = useParams();

    const [loading, setLoading] = useState(true)
    const [bab, setBab] = useState([])
    const [judulMateri, setJudulMateri] = useState()

    useEffect(() => {
        axios.get("/materi/slug/" + materi)
        .then((response) => {
            if(response.status == 200) {
                const id_materi = response.data.results.id_materi
                setJudulMateri(response.data.results.judul_materi)

                const endpoint = '/bab/materi/' + id_materi;
                axios.get(endpoint)
                .then((response) => {
                    if(response.status == 200) {
                        let resp = [];
        
                        response.data.results.map((result) => {
                            resp.push({
                                id: result.id,
                                id_materi: result.id_materi,
                                id_bab: result.id_bab,
                                judul_bab: result.judul_bab,
                                slug: result.slug,
                                url_gambar: result.url_gambar
                            });
                        });
                        setBab(resp);
                        setLoading(false);
                    }
                    
                })
                .catch(function (error) {
                    console.log(error);
                })
            } 
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    if (loading) return <Spinner/>

    return (
        <div className="container mt-5">
            <h3 className="pb-5 center">{judulMateri}</h3>
            <Grid container spacing={3}>
                {
                    bab.map((m) => (
                        <Grid item sm={6} md={3} lg={3}>
                            <Link to={`/latihan-soal/${materi}/${m.slug}`}>  
                                <div class="card box-shadow py-3 px-3">
                                    <div class="card-img-container">
                                        <img src={`${m.url_gambar}`} alt="" />
                                    </div>
                                    <p className="font-weight-bold pb-2 pt-3">{m.judul_bab}</p>
                                </div>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}