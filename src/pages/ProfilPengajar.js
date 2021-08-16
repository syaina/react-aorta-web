import React from 'react';

import Grid from '@material-ui/core/Grid';

export default function ProfilPengajar () {
    return (
        <div className="container mt-5">
            <h3 className="pb-4 center">Profil Pengajar</h3>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <div class="card box-shadow py-3 px-3">
                        <div class="card-img-container">
                            <img src="../images/dummy.png" alt="Pengajar" />
                        </div>
                        <p className="font-weight-bold pb-2 pt-3">Nama Lengkap</p>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, expedita animi eos voluptatem temporibus doloremque qui sed fugit voluptates, labore vero nulla error esse ipsum adipisci mollitia necessitatibus.</p> */}
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <div class="card box-shadow py-3 px-3">
                        <div class="card-img-container">
                            <img src="../images/dummy.png" alt="Pengajar" />
                        </div>
                        <p className="font-weight-bold pb-2 pt-3">Nama Lengkap</p>
                    </div>
                </Grid>
                
            </Grid>
        </div>
    )
}