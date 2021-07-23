import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import FormBooking from '../components/FormBooking';
import UploadFiles from '../components/UploadFiles';
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

  function getSteps() {
    return ['Pilih Kelas', 'Bukti Transfer'];
  }

  const callback = (produk, noHandphone) => {
    console.log(produk, noHandphone)
    setProduk(produk);
    setNoHandphone(noHandphone)
  }

  const getFiles = (files) => {
    console.log(files)
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
    axios.post('/booking', {
        id_user: id_user,
        no_handphone: noHandphone,
        id_produk: produk,
        bukti_transfer: buktiTransfer
    })
    .then(response => { 
        // if (response.data.result.token) {
            
        //     // setAlertTo("success");
        //     // setTimeout(() => {
        //     //     window.location.href = "/";
        //     // }, 1000);
        // }
        console.log(response)
        console.log(AuthService.getToken())
    })
    .catch(error => {
        console.log(error.response)
        // setAlertTo("error")
    });
  }

  console.log(produk, noHandphone, buktiTransfer)

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
            {/* <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button> */}
            <SubmitBtn value="Kirim" onClick={handleSubmit()}/>
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
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Selesai' : 'Lanjut'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
