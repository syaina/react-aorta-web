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

import ConfirmDialog, { confirmDialog } from '../components/ConfirmDialog';

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

    const [openDialog, setOpenDialog] = useState(false);

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
                                option: [
                                  { 
                                    opt: result.pil1,
                                    selected: false
                                  },
                                  {
                                    opt: result.pil2,
                                    selected: false
                                  },
                                  {
                                    opt: result.pil3,
                                    selected:false
                                  },
                                  {
                                    opt: result.pil4,
                                    selected:false
                                  },
                                  {
                                    opt: result.pil5,
                                    selected:false
                                  }
                                ],
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

    const selectOption = (optionId, selectedId, optionValue) => {
      // setSoal(
      //   soal.map((data) => {
      //     data.id_soal === selectedId ? {...data, option:
      //       option.map((index, item) => {
      //         index === optionId ? {...item, selected: true} : {...item, selected: false}
      //       })
      //     } : data
      //   })
      // )
      setSoal(
        soal.map((item, index) =>
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
      
      console.log(answer)
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

    const handleConfirm = () => {
      console.log(answer)
    }

    return (
        <div className="container mt-5">
            <ConfirmDialog /> 
            <h3 className="pb-5 center">{judulBab}</h3>
            <form action="" onSubmit={e => { e.preventDefault() }}  >
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
                            <div className="option-group mt-2">
                              <input type="radio" name={data.id_soal} id="pil1" value="a" checked={data.option[0].selected} onClick={() => selectOption(0, data.id_soal, "a")} />
                              <label for="pil1">{data.option[0].opt}</label>

                              <input type="radio" name={data.id_soal} id="pil2" value="b" checked={data.option[1].selected} onClick={() => selectOption(1, data.id_soal, "b")} />
                              <label for="pil2">{data.option[1].opt}</label>

                              <input type="radio" name={data.id_soal} id="pil3" value="c" checked={data.option[2].selected} onClick={() => selectOption(2, data.id_soal, "c")} />
                              <label for="pil3">{data.option[2].opt}</label>

                              <input type="radio" name={data.id_soal} id="pil4" value="d" checked={data.option[3].selected} onClick={() => selectOption(3, data.id_soal, "d")} />
                              <label for="pil4">{data.option[3].opt}</label>

                              <input type="radio" name={data.id_soal} id="pil5" value="e" checked={data.option[4].selected} onClick={() => selectOption(4, data.id_soal, "e")} />
                              <label for="pil5">{data.option[4].opt}</label>
                            </div>

                            {
                              value > 0 ? <button className="btn btn-primary btn-small mr-2 mt-4" onClick={() => handlePrev()}>Sebelumnya</button> : null
                            }
                            {
                              value < soal.length-1 ? <button  className="btn btn-primary btn-small mt-4" onClick={() => handleNext()}>Selanjutnya</button> : null
                            }
                            {
                              value == soal.length-1 ? <button className="btn btn-secondary btn-small mt-4" onClick={() => {confirmDialog("Apa kamu yakin untuk submit jawabanmu?", () => handleConfirm());}}>Submit</button> : null
                            }
                        </TabPanel>
                    ))
                }
            </div>
          </form>
           {
                answer.map((item) =>
                  <p>{item.id_soal}, {item.answer}, {item.answerKey}</p>
                  
                )
            }
            <p>Correct: {correct}</p>
        </div>
    )
}