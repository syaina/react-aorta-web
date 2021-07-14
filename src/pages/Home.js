import React from 'react';

import Grid from '@material-ui/core/Grid';

import Header from '../components/Header';
import DisplaySlider from '../components/DisplaySlider';

export default function Home () {
    return (
        <div>
            <Header/>
            <div className="container">
                <Grid container spacing={3}>
                    <Grid item sm={12} md={7}>
                        <DisplaySlider />
                    </Grid>
                    <Grid item sm={12} md={5}>
                        <h1 className="title mt-5">Tentir Aorta</h1>
                        <h4 className="mb-5 font-grey font-light">make it easy</h4>
                        <p className="p-home">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, expedita animi eos voluptatem temporibus doloremque qui sed fugit voluptates, labore vero nulla error esse ipsum adipisci mollitia necessitatibus, eaque suscipit aut! Dicta officia, deleniti ab fugit distinctio aperiam aliquid consequatur, odio id vitae possimus ea incidunt ipsum quae nulla accusantium?</p>
                        <div className="my-5 center">
                            <a className="link-btn link-btn-home" href="/">Know More</a>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className="d-flex">
                <div className="container bg-dark-blue tab-style font-white">
                    <h5 className="mt-3">Butuh tantangan?</h5>
                    <p>Yuk jawab soal</p>
                </div>
                <div className="tab-like-section">
                    
                </div>
            </div>
            <div className="bg-dark-blue py-3">
                <div className="container py-5">
                    <div className="bg-butterscotch container-question-box">
                        <div className="bg-white question-box">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestias voluptatem. Fuga veniam ullam, suscipit adipisci iusto vel quisquam temporibus ducimus deserunt amet natus qui repellendus rem rerum animi iure!</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="my-5">
                        <a className="link-btn" href="/">Lihat soal lainnya</a>
                    </div>

                    <Grid container spacing={3}>
                        <Grid item sm={12} md={3} lg={3}>
                            <div class="card bg-white">
                                <div class="card-img-container">
                                    <img src="./images/image-4.jpg" alt="Bab" />
                                </div>
                                <h5>Bab Anatomi</h5>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={3} lg={3}>
                            <div class="card bg-white">
                                <div class="card-img-container">
                                    <img src="./images/image-4.jpg" alt="Bab" />
                                </div>
                                <h5>Bab Anatomi</h5>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={3} lg={3}>
                            <div class="card bg-white">
                                <div class="card-img-container">
                                    <img src="./images/image-4.jpg" alt="Bab" />
                                </div>
                                <h5>Bab Anatomi</h5>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={3} lg={3}>
                            <div class="card bg-white">
                                <div class="card-img-container">
                                    <img src="./images/image-4.jpg" alt="Bab" />
                                </div>
                                <h5>Bab Anatomi</h5>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}