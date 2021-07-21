import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthService from '../services/auth.service';

function Header (props) {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (AuthService.getToken()) {
            setIsLogin(true);
        }
    }, [])
    // const [isHamburger, setHamburger] = useState(false);

    // function openHamburger () {
    //     isHamburger ? setHamburger(false) : setHamburger(true)
    // }

    return (
        <header>
            <Link to="/"><img src="../logo.png" alt="AORTA" /></Link>
            <ul>
                <li><Link to="/profil-aorta">Profil Aorta</Link></li>
                <li><Link to="/profil-pengajar">Profil Pengajar</Link></li>
                <li><Link to="/daftar-kelas">Daftar Kelas</Link></li>
                <li><Link to="/latihan-soal">Latihan Soal</Link></li>
            </ul>
            {
                isLogin ? AuthService.getToken() : <Link className="link-btn" to="/login">Login/Buat Akun</Link>

            }
            
        </header>

    );
}

export default Header;