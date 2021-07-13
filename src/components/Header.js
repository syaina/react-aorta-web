import React, { useState } from 'react';

function Header (props) {
    const [isHamburger, setHamburger] = useState(false);

    function openHamburger () {
        isHamburger ? setHamburger(false) : setHamburger(true)
    }

    return (
        <header>
            <img src="../logo.png" alt="AORTA" />
            <ul>
                <li>Profil Aorta</li>
                <li>Profil Pengajar</li>
                <li>Daftar Kelas</li>
                <li>Latihan Soal</li>
            </ul>
            <a class="link-btn" href="/">Login/Buat Akun</a>
        </header>

    );
}

export default Header;