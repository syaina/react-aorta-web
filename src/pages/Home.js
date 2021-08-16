import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import SoalSlider from '../components/SoalSlider';
import DisplaySlider from '../components/DisplaySlider';
import TestimoniSlider from '../components/TestimoniSlider';
import Footer from '../components/Footer';

export default function Home () {
    const [materi, setMateri] = useState([])
    const [soal, setSoal] = useState([])

    useEffect(() => {
        const getSoal = axios.get('/soal/bab/BAB-000001')
        getSoal
        .then((response) => {
            if(response.status == 200) {
                let respSoal = [];
                
                response.data.results.map((result) => {
                    respSoal.push({
                        id: result.id,
                        id_materi: result.id_materi,
                        id_bab: result.id_bab,
                        id_soal: result.id_soal,
                        soal: result.soal,
                        url_gambar: result.url_gambar,
                        jawaban: result.jawaban,
                        pembahasan: result.pembahasan,
                        option: [
                          { 
                            opt: result.pil1,
                            selected: false,
                            correctAnswer: result.jawaban === "a" ? true : false
                          },
                          {
                            opt: result.pil2,
                            selected: false,
                            correctAnswer: result.jawaban === "b" ? true : false
                          },
                          {
                            opt: result.pil3,
                            selected:false,
                            correctAnswer: result.jawaban === "c" ? true : false
                          },
                          {
                            opt: result.pil4,
                            selected:false,
                            correctAnswer: result.jawaban === "d" ? true : false
                          },
                          {
                            opt: result.pil5,
                            selected:false,
                            correctAnswer: result.jawaban === "e" ? true : false
                          }
                        ]
                    });
                });

                setSoal(respSoal);
            }
            
        })
        .catch(function (error) {
        })

        //get Materi 
        const getMateri = axios.get('/materi')
        getMateri
        .then((response) => {
            if (response.status === 200) {
                let respMateri = [];

                response.data.results.map((result) => {
                    respMateri.push({
                        id: result.id,
                        id_materi: result.id_materi,
                        judul_materi: result.judul_materi,
                        slug: result.slug,
                        url_gambar: result.url_gambar
                    });
                });
                setMateri(respMateri);
            } 
            
        })
        getMateri.catch(function (error) {
        });


    }, [])

    return (
        <div>
            <div className="container">
                <Grid container spacing={9}>
                    <Grid item sm={12} md={6}>
                        <div className="slider-home">
                            <DisplaySlider />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <h1 className="title mt-5">Tentir Aorta</h1>
                        <h4 className="mb-5 font-grey font-light">make it easy</h4>
                        <p className="p-home">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, expedita animi eos voluptatem temporibus doloremque qui sed fugit voluptates, labore vero nulla error esse ipsum adipisci mollitia necessitatibus, eaque suscipit aut! Dicta officia, deleniti ab fugit distinctio aperiam aliquid consequatur, odio id vitae possimus ea incidunt ipsum quae nulla accusantium?</p>
                        <div className="my-5 center">
                            <a className="link-btn link-btn-home" href="/profil-aorta">Know More</a>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className="d-flex mt-4">
                <div className="container bg-dark-blue tab-style font-white">
                    <h5 className="mt-3">Butuh tantangan?</h5>
                    <p>Yuk jawab soal</p>
                </div>
                <div className="tab-like-section">
                    
                </div>
            </div>
            <div className="bg-dark-blue py-3">
                <div className="container py-5">
                    <SoalSlider/>
                    <div className="my-5">
                        <Link className="link-btn" to="/latihan-soal">Lihat soal lainnya</Link>
                    </div>

                    <Grid container spacing={3}>
                        { 
                            materi.map((m) => (
                                <Grid item sm={6} md={3} lg={3}>
                                    <Link to={`/latihan-soal/${m.slug}`}>  
                                        <div class="card bg-white">
                                            {
                                                m.url_gambar === "" ? null : 
                                                <div class="card-img-container">
                                                    <img src={`${m.url_gambar}`} alt="" />
                                                </div>
                                            }
                                            <p className="font-weight-bold pb-2 pt-3">{m.judul_materi}</p>
                                        </div>
                                    </Link>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </div>
            <div className="container my-5">
                <h3 className="center font-primary pt-4 pb-5">Apa kata mereka?</h3>
                <TestimoniSlider />
            </div>
            <div className="container my-5">
                <h3 className="center font-secondary pt-4 pb-5">Pesan program kami sekarang</h3>
                <Grid container spacing={2}>
                    <Grid item sm={6} md={4} lg={4}>
                        <div class="card bg-dark-blue">
                            <div class="card-img-container">
                                <img src="../images/image-2.jpg" alt="Bab" />
                            </div>
                            <p className="font-white">Kelas Anatomi</p>
                        </div>
                    </Grid>
                    <Grid item sm={6} md={4} lg={4}>
                        <div class="card bg-dark-blue">
                            <div class="card-img-container">
                                <img src="../images/image-2.jpg" alt="Bab" />
                            </div>
                            <p className="font-white">Kelas Anatomi</p>
                        </div>
                    </Grid>
                    <Grid item sm={6} md={4} lg={4}>
                        <div class="card bg-dark-blue">
                            <div class="card-img-container">
                                <img src="../images/image-2.jpg" alt="Bab" />
                            </div>
                            <p className="font-white">Kelas Anatomi</p>
                        </div>
                    </Grid>
                    <Grid item sm={6} md={4} lg={4}>
                        <div class="card bg-dark-blue">
                            <div class="card-img-container">
                                <img src="../images/image-2.jpg" alt="Bab" />
                            </div>
                            <p className="font-white">Kelas Anatomi</p>
                        </div>
                    </Grid>
                    <Grid item sm={6} md={4} lg={4}>
                        <div class="card bg-dark-blue">
                            <div class="card-img-container">
                                <img src="../images/image-2.jpg" alt="Bab" />
                            </div>
                            <p className="font-white">Kelas Anatomi</p>
                        </div>
                    </Grid>
                    <Grid item sm={6} md={4} lg={4}>
                        <div class="card bg-dark-blue">
                            <div class="card-img-container">
                                <img src="../images/image-2.jpg" alt="Bab" />
                            </div>
                            <p className="font-white">Kelas Anatomi</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}