import React, { useState, useEffect } from "react";
import axios from 'axios';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ModalDialog from './ModalDialog';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,
            fontSize: `50`,
            transform: `translate(0, 0%)`,
            top: `93%`,
            right: `10%`}}
        onClick={onClick}
      />
    );
}
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
            fontSize: `50`,
            transform: `translate(0, 0%)`,
            top: `93%`,
            left: `83%`}}
        onClick={onClick}
      />
    );
}

export default function SoalSlider () {
  const [soal, setSoal] = useState([])
  const [answer, setAnswer] = useState([])
  const [message, setMessage] = useState()
  const [isModal, setModal] = useState(false)

  useEffect(() => {
      const getSoal = axios.get('/soal/bab/BAB-000001')
      getSoal
      .then((response) => {
          if(response.status == 200) {
              let respSoal = [];
              
              response.data.results.map((result) => {
                  respSoal.push({
                      id: result.id,
                      id_materi: result.id_materi,
                      id_bab: result.id_bab,
                      id_soal: result.id_soal,
                      soal: result.soal,
                      url_gambar: result.url_gambar,
                      jawaban: result.jawaban,
                      pembahasan: result.pembahasan,
                      option: [
                        { 
                          opt: result.pil1,
                          selected: false,
                          correctAnswer: result.jawaban === "a" ? true : false
                        },
                        {
                          opt: result.pil2,
                          selected: false,
                          correctAnswer: result.jawaban === "b" ? true : false
                        },
                        {
                          opt: result.pil3,
                          selected:false,
                          correctAnswer: result.jawaban === "c" ? true : false
                        },
                        {
                          opt: result.pil4,
                          selected:false,
                          correctAnswer: result.jawaban === "d" ? true : false
                        },
                        {
                          opt: result.pil5,
                          selected:false,
                          correctAnswer: result.jawaban === "e" ? true : false
                        }
                      ]
                  });
              });

              let respSoal2 = []
              response.data.results.map((result) => {
                respSoal2.push({
                    id_soal: result.id_soal,
                    answer: "",
                    answerKey: result.jawaban
                  });
              });

              setSoal(respSoal);
              setAnswer(respSoal2);
          }
          
      })
      .catch(function (error) {
      })
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    // autoplay: true,
    // autoplaySpeed: 5000
  };

  const selectOption = (optionId, selectedId, optionValue) => {
    setSoal(
      soal.map((item) =>
        item.id_soal === selectedId 
          ? {
              ...item,
              option: item.option.map((item, index) =>
                index === optionId
                  ? { ...item, selected: true }
                  : { ...item, selected: false }
              ),
            }
          : item
      )
    )

    setAnswer(
      answer.map((item) =>
        item.id_soal === selectedId ? {...item, answer: optionValue} : item
      )
    )

    checkAnswer(selectedId)
    setModal(true)
  }

  const checkAnswer = (selectedId) => {
    answer.map((item) => 
      item.id_soal === selectedId 
      ? item.answer === item.answerKey 
        ? setMessage("Yeay! Selamat jawabanmu benar!") : setMessage("Maaf jawabanmu kurang tepat. Coba lagi yaa!") 
      : null
    )

    console.log(soal)
  }

  let ModalDialog = 
    <div>
      <Dialog open={true} maxWidth="xs" fullWidth> 
            <DialogTitle>Hasil Jawabanmu</DialogTitle>
            <Box position="absolute" top={0} right={0}>
                <IconButton onClick={() => {setModal(false);}}>
                    <Close />
                </IconButton>
            </Box>
            <DialogContent>
                <Typography>{message}</Typography>
            </DialogContent>
            <DialogActions>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                    setModal(false);
                    }}
                >
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    </div>

  return (
    <div className="">
      {
        isModal ?  ModalDialog
                : null
      }
     
        <div className="bg-butterscotch container-question-box">
            <Slider {...settings}>
              {
                soal.map((data) => (
                  <div className="bg-white question-box font-small">
                    <div className="py-5 px-5 box">
                        <p>{data.soal}</p>
                        {
                          data.url_gambar !== null 
                          ? <div className="soal-img-container my-3">
                            <img src={data.url_gambar} alt="" />
                          </div>
                          : null
                        }
                        
                        <div className="option-group mt-2">
                          <input type="radio" name={data.id_soal} id={`${data.id_soal}-pil1`} value="a" checked={data.option[0].selected} onClick={() => selectOption(0, data.id_soal, "a")} />
                          <label for={`${data.id_soal}-pil1`}>{data.option[0].opt}</label>

                          <input type="radio" name={data.id_soal} id={`${data.id_soal}-pil2`} value="b" checked={data.option[1].selected} onClick={() => selectOption(1, data.id_soal, "b")} />
                          <label for={`${data.id_soal}-pil2`}>{data.option[1].opt}</label>

                          <input type="radio" name={data.id_soal} id={`${data.id_soal}-pil3`} value="c" checked={data.option[2].selected} onClick={() => selectOption(2, data.id_soal, "c")}/>
                          <label for={`${data.id_soal}-pil3`}>{data.option[2].opt}</label>

                          <input type="radio" name={data.id_soal} id={`${data.id_soal}-pil4`} value="d" checked={data.option[3].selected} onClick={() => selectOption(3, data.id_soal, "d")}/>
                          <label for={`${data.id_soal}-pil4`}>{data.option[3].opt}</label>

                          <input type="radio" name={data.id_soal} id={`${data.id_soal}-pil5`} value="e" checked={data.option[4].selected} onClick={() => selectOption(4, data.id_soal, "e")}/>
                          <label for={`${data.id_soal}-pil5`}>{data.option[4].opt}</label>
                        </div>
                    </div>
                  </div>
                ))
              }
            </Slider>
        </div>
    </div>
  );
}