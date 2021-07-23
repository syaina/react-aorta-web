import React from 'react';

import Grid from '@material-ui/core/Grid';

import SoalSlider from '../components/SoalSlider';
import DisplaySlider from '../components/DisplaySlider';
import TestimoniSlider from '../components/TestimoniSlider';

export default function Home () {
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
                            <a className="link-btn link-btn-home" href="/">Know More</a>
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
                    <SoalSlider />
                    <div className="my-5">
                        <a className="link-btn" href="/">Lihat soal lainnya</a>
                    </div>

                    <Grid container spacing={3}>
                        <Grid item sm={12} md={3} lg={3}>
                            <div class="card bg-white">
                                <div class="card-img-container">
                                    <img src="../images/image-2.jpg" alt="Bab" />
                                </div>
                                <h5>Bab Anatomi</h5>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={3} lg={3}>
                            <div class="card bg-white">
                                <div class="card-img-container">
                                    <img src="../images/image-2.jpg" alt="Bab" />
                                </div>
                                <h5>Bab Anatomi</h5>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={3} lg={3}>
                            <div class="card bg-white">
                                <div class="card-img-container">
                                    <img src="../images/image-2.jpg" alt="Bab" />
                                </div>
                                <h5>Bab Anatomi</h5>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={3} lg={3}>
                            <div class="card bg-white">
                                <div class="card-img-container">
                                    <img src="../images/image-2.jpg" alt="Bab" />
                                </div>
                                <h5>Bab Anatomi</h5>
                            </div>
                        </Grid>
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
        </div>
    );
}