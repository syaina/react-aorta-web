import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header (props) {
    const [isHamburger, setHamburger] = useState(false);

    function openHamburger () {
        isHamburger ? setHamburger(false) : setHamburger(true)
    }

    return (
        <header>
            <Link to="/"><img src="../logo.png" alt="AORTA" /></Link>
            <ul>
                <li><Link to="/profil-aorta">Profil Aorta</Link></li>
                <li><Link to="/profil-pengajar">Profil Pengajar</Link></li>
                <li><Link to="/daftar-kelas">Daftar Kelas</Link></li>
                <li><Link to="/latihan-soal">Latihan Soal</Link></li>
            </ul>
            <Link className="link-btn" to="/login">Login/Buat Akun</Link>
        </header>

    );
}

export default Header;