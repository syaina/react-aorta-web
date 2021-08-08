import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Link, useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabPanel: {
    width: '100%',
    maxWidth: 1000-48
  }
}));
export default function Soal () {
    const {materi, bab} = useParams()
    const [soal, setSoal] = useState([])
    const [judulBab, setJudulBab] = useState()
    const [answer, setAnswer] = useState([])
    const [correct, setCorrect] = useState()

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handlePrev = () => {
        setValue(value-1)
    }

    const handleNext = () => {
        setValue(value+1)
    }

    useEffect(() => {
        axios.get("/bab/slug/" + bab)
        .then((response) => {
            if(response.status == 200) {
                const id_bab = response.data.results.id_bab
                setJudulBab(response.data.results.judul_bab)

                const endpoint = '/soal/bab/' + id_bab;
                axios.get(endpoint)
                .then((response) => {
                    if(response.status == 200) {
                        let resp = [];
                        let resp2 = []
                        let j = 1;
                        
                        response.data.results.map((result) => {
                            resp.push({
                                id: result.id,
                                id_materi: result.id_materi,
                                id_bab: result.id_bab,
                                id_soal: result.id_soal,
                                soal: result.soal,
                                jawaban: result.jawaban,
                                pil1: result.pil1,
                                pil2: result.pil2,
                                pil3: result.pil3,
                                pil4: result.pil4,
                                pil5: result.pil5,
                                url_gambar: result.url_gambar
                            });
                        });

                        let i = 1;

                        response.data.results.map((result) => {
                          resp2.push({
                              id: i,
                              id_soal: result.id_soal,
                              answer: "",
                              answerKey: result.jawaban
                            });
                            i += 1
                        });
                        setSoal(resp);
                        setAnswer(resp2);
                    }
                    
                })
                .catch(function (error) {
                    console.log(error);
                })
            } 
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    const selectOption = (selectedId, optionValue) => {
      setAnswer(
        answer.map((item) =>
          item.id_soal === selectedId ? {...item, answer: optionValue} : item
        )
      )
    }
    
    useEffect(() => {
      countScore()
    }, [answer])

    const countScore = () => {
      let correct = 0
      answer.map((item) =>
        item.answer === item.answerKey ? correct += 1 : null 
      )
      setCorrect(correct)
    }


    return (
        <div className="container mt-5">
            {
                answer.map((item) =>
                  <p>{item.id_soal}, {item.answer}, {item.answerKey}</p>
                  
                )
            }
            <p>Correct: {correct}</p>
           
            <h3 className="pb-5 center">{judulBab}</h3>
            <form action="">
              <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    {
                        soal.map((data, index) => (
                            <Tab label={`Pertanyaan ${index+1}`} {...a11yProps({index})} />
                        ))
                    }
                </Tabs>
              
                {
                    soal.map((data, index) => ( 
                        <TabPanel value={value} index={index} class={classes.tabPanel}>
                            <p>{data.soal}</p>
                            <input type="radio" name={data.id_soal} id="pil1" value="a" onClick={() => selectOption(data.id_soal, "a")} />
                            <label for="pil1">{data.pil1}</label>

                            <input type="radio" name={data.id_soal} id="pil2" value="b" onClick={() => selectOption(data.id_soal, "b")} />
                            <label for="pil2">{data.pil2}</label>

                            <input type="radio" name={data.id_soal} id="pil3" value="c" onClick={() => selectOption(data.id_soal, "c")} />
                            <label for="pil3">{data.pil3}</label>

                            <input type="radio" name={data.id_soal} id="pil4" value="d" onClick={() => selectOption(data.id_soal, "d")} />
                            <label for="pil4">{data.pil4}</label>

                            <input type="radio" name={data.id_soal} id="pil5" value="e" onClick={() => selectOption(data.id_soal, "e")} />
                            <label for="pil5">{data.pil5}</label>
                            <p>Jawaban: {data.jawaban}</p>

                            {
                              value > 0 ? <button onClick={() => handlePrev()}>Prev</button> : null
                            }
                            {
                              value < soal.length-1 ? <button onClick={() => handleNext()}>Next</button> : null
                            }
                            
                        </TabPanel>
                    ))
                }
            </div>
          </form>
        </div>
    )
}