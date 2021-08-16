import React, { useEffect, useState} from 'react';
import MyAccount from '../containers/MyAccount';
import RiwayatKelas from '../containers/RiwayatKelas';
import RiwayatSoal from '../containers/RiwayatSoal';

export default function Profile () {
    const [activeTab, setActiveTab] = useState(1)

    const openTab = (index) => {
        setActiveTab(index)
    }
    const showTab = (index) => {
        switch (index) {
            case 0:
                return <MyAccount/>
            case 1:
                return <RiwayatKelas/>
            case 2:
                return <RiwayatSoal />
            default:
              return '';
        }
    }

    return (
        <div className="container mt-5 mb-5">
            <h3 className="pb-5 center">Profilku</h3>
            
            <div className="tab-container">
                <div className="tab-menu">
                    <div className={(activeTab === 0 ? "active" : "") + " tab-menu-item"} id="0" onClick={() => openTab(0)}>Akun</div>
                    <div className={(activeTab === 1 ? "active" : "") + " tab-menu-item"} id="1" onClick={() => openTab(1)}>Riwayat Kelas</div>
                    <div className={(activeTab === 2 ? "active" : "") + " tab-menu-item"} id="2" onClick={() => openTab(2)}>Riwayat Soal</div>
                </div>

                <div className="tab-content">
                    {showTab(activeTab)}
                </div>
            </div>
        </div>
    )
}