import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

import FormBooking from '../components/FormBooking';
import UploadFiles from '../components/UploadFiles';
import AlertMessage from '../components/AlertMessage';

import SubmitBtn from '../components/SubmitBtn';
import AuthService from '../services/auth.service';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  iconSuccess: {
    backgroundColor: green[500],
    fill: "white",
    width: 50,
    borderRadius: 50,
    padding: 10,
    boxShadow: "0px 1px 9.5px -2.5px rgb(0 0 0 / 25%)"
  },
}));

export default function HorizontalLabelPositionBelowStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const id_user = AuthService.getUser();
  const [produk, setProduk] = useState();
  const [noHandphone, setNoHandphone] = useState();
  const [buktiTransfer, setBuktiTransfer] = useState();

  const steps = getSteps();

  const handleNext = () => {
    if(produk && noHandphone) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    if(buktiTransfer) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }

  function getSteps() {
    return ['Pilih Kelas', 'Bukti Transfer'];
  }

  const callback = (produk, noHandphone) => {
    setProduk(produk);
    setNoHandphone(noHandphone)
  }

  const getFiles = (files) => {
    setBuktiTransfer(files)
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <FormBooking parentCallback = {callback}/>
      case 1:
        return <UploadFiles parentCallback = {getFiles}/>
      default:
        return 'Unknown stepIndex';
    }
  }
  
  const handleSubmit = () => {
    setLoading(true)
    const formData = new FormData()
    formData.append('id_user', id_user);
    formData.append('id_produk', produk);
    formData.append('no_handphone', noHandphone);
    formData.append('bukti_transfer', buktiTransfer);

    const config = {
      headers: { 
        'Content-Type': 'multipart/form-data',
       }
    }

    axios.post('/booking/insert', formData, config)
    .then(response => { 
        if (response.status == 200) {
            setSuccess(true)
            setLoading(false)
            // setAlertTo("success");
            // setTimeout(() => {
            //     window.location.href = "/";
            // }, 1000);
        }
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
        // setAlertTo("error")
    });
  }

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            {loading ? <div className="mb-5"><CircularProgress size={50} /></div> : null}
            {success ? 
              <div><CheckIcon class={classes.iconSuccess} /><div className="mt-4 center font-underline"><Link to="/">Kembali ke halaman beranda</Link></div></div> : 
              <SubmitBtn style={{ color: "white", paddingLeft: 10, paddingRight: 10  }} value="Kirim" onClick={handleSubmit}/>}
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Kembali
              </Button>

              
                {activeStep === steps.length - 1 ? 
                  <Button variant="contained" color="primary" onClick={handleFinish}>Selesai</Button>
                  : 
                  <Button variant="contained" color="primary" onClick={handleNext}>Lanjut</Button>
                }
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
