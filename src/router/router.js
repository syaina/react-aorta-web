import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Header';

import DaftarKelas from '../pages/DaftarKelas';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import ProfilPengajar from '../pages/ProfilPengajar';
import Materi from '../pages/Materi';
import Bab from '../pages/Bab';
import Soal from '../pages/Soal';
import SoalResult from '../pages/SoalResult';


function routes() {
    return(
        <Router>
            <div>
                <Header/>
                <Route exact path="/" component={Home} />
                <Route exact path="/daftar" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profil-pengajar" component={ProfilPengajar} />
                <Route exact path="/daftar-kelas" component={DaftarKelas} />
                <Route exact path="/latihan-soal" component={Materi} />
                <Route exact path="/latihan-soal/:materi" component={Bab} />
                <Route exact path="/latihan-soal/:materi/:bab" component={Soal} />
                <Route exact path="/latihan-soal-dan-pembahasan" component={SoalResult} />
                {/* <Route exact path="/articles" component={Articles} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/products" component={Products} />
                <Route path="/products/:id" component={ProductDetail} /> */}

                {/* <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} /> */}
            </div>
        </Router>
    );
}
export default routes;