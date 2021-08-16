import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';

import ModalDialog from '../components/ModalDialog';
import Spinner from '../components/Spinner';

export default function SoalResult ({location}) {
    const history = useHistory();
    const res = location.state;
    
    const [loading, setLoading] = useState(true)

    const score = Math.round((res.correct/(res.soal.length)) * 100)
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(!loading)
          }, 3000)
    }, [])

    if (loading) return <Spinner/>

    return (
        <div className="container mt-5">
            <ModalDialog 
                modalTitle="Hasil Jawabanmu"
                modalContent={`Skor: ${score}`}
                button="OK"
            />
            <h3 className="pb-5 center"> Pembahasan Soal {res.judulBab}</h3>

            {
                res.soal.map((data, index) => ( 
      
                    <div className="mb-5 max-width--sm">
                        <p>{index+1}. {data.soal}</p>
                        {
                          data.url_gambar !== null 
                          ? <div className="soal-img-container my-3">
                            <img src={data.url_gambar} alt="" />
                          </div>
                          : null
                        }
                        <div className="option-group mt-2">
                            {data.option.map((item) =>
                                <label className={
                                    item.selected ? 
                                        item.selected === item.correctAnswer ? "answer-true" : "answer-false"
                                        : ""
                                }>{item.opt}</label>
                            )}
                        </div>
                        {
                            res.answer[index].answer !== res.answer[index].answerKey ? <p className="mt-3">Pembahasan: {data.pembahasan}</p> : null
                        }
                    </div>
                ))
            }
        </div>
    );
} 