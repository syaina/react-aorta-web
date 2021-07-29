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

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                        console.log(response.data.results)
        
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
                        setSoal(resp);
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

    return (
        <div className="container mt-5">
            <h3 className="pb-5 center">{judulBab}</h3>
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
                            <p>{data.pil1}</p>
                            <p>{data.pil2}</p>
                            <p>{data.pil3}</p>
                            <p>{data.pil4}</p>
                            <p>{data.pil5}</p>
                            <p>Jawaban: {data.jawaban}</p>
                        </TabPanel>
                    ))
                }
                
               
            </div>
        </div>
    )
}