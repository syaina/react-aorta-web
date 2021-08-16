import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthService from '../services/auth.service';

import DropdownMenu from './DropdownMenu';

function Header (props) {
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState();

    useEffect(() => {
        if (AuthService.getToken()) {
            setIsLogin(true);
            getFirstName(AuthService.getName());
        }
    }, [])
    // const [isHamburger, setHamburger] = useState(false);

    // function openHamburger () {
    //     isHamburger ? setHamburger(false) : setHamburger(true)
    // }

    const getFirstName = (name) => {
        const splitName = name.split(" ")
        setName(splitName[0])
    }

    return (
        <header>
            <div className="web-menu">
                <Link to="/"><img src="/../logo.png" alt="AORTA" /></Link>
                <ul>
                    <li><Link to="/profil-aorta">Profil Aorta</Link></li>
                    <li><Link to="/profil-pengajar">Profil Pengajar</Link></li>
                    <li><Link to="/daftar-kelas">Daftar Kelas</Link></li>
                    <li><Link to="/latihan-soal">Latihan Soal</Link></li>
                    {/* <li><Link to="/latihan-soal">{AuthService.getUser()}</Link></li> */}
                </ul>
                
                {
                    isLogin ? <DropdownMenu button={`Hai, ${name}`} /> : <Link className="link-btn" to="/login">Login/Buat Akun</Link>

                }
            </div>
            
        </header>

    );
}

export default Header;