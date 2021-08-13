import React from 'react';

import Grid from '@material-ui/core/Grid'

export default function Footer () {
    return (
        <footer className="bg-dark-blue mt-5">
            <div className="pt-5 container">
                <Grid container spacing={10} justifyContent="space-between">
                    <Grid item sm={12} md={6} lg={6}>
                        <h4 className="">Tentir Aorta</h4>
                        <p className="pt-3 font-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris neque, pellentesque at pulvinar ac, porta vitae enim. Cras commodo eleifend ultrices. Quisque faucibus sem in quam posuere dapibus. Pellentesque facilisis eget turpis aliquam mollis. Curabitur malesuada sapien leo, vel faucibus urna congue non. Aliquam non ex purus. Curabitur luctus lectus mauris, at interdum velit venenatis ut. Integer efficitur sem ut rutrum finibus. Suspendisse potenti.</p>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6} align="center">
                        <h4>Contact Us</h4>
                        <div className="pt-3 footer-contact-container">
                            <a href="" className="contact-icon">
                                <img src="/../../images/wa.png"/>
                                Whatsapp
                            </a>
                            <a href="https://www.facebook.com/" className="contact-icon">
                                <img src="/../../images/facebook.png" />
                                Facebook
                            </a>
                            <a href="https://www.instagram.com/tentiraorta/" className="contact-icon">
                                <img  src="/../../images/instagram.png" />
                                Instagram
                            </a>
                        </div>
                    </Grid>
                </Grid>
                <p className="center font-small py-3">&copy; Tentir Aorta 2021</p>
            </div>            
        </footer>
    )
}