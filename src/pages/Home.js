import React from 'react';
import Header from '../components/Header';

import Grid from '@material-ui/core/Grid';

export default function Home () {
    return (
        <div>
            <Header/>
            <div className="container">
                <Grid container spacing={3}>
                    <Grid item sm={12} md={7}>
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
            
        </div>
    );
}