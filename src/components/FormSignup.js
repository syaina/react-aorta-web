import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import axios from "axios";

import AuthService from '../services/auth.service';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import SubmitBtn from './SubmitBtn';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '100%',
        maxWidth: '350px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
    },
}));

export default function FormLogin({parentCallback}) {
    const classes = useStyles();
    const [alert, setAlert] = useState("");
    
    const {
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        handleSignup(
            data.nama, 
            data.email, 
            data.password,
            data.asal_universitas,
            data.pekerjaan)
    };

    function handleSignup (nama, email, password, asal_universitas, pekerjaan) {
        console.log(nama, email, password, asal_universitas, pekerjaan)

        axios.post('/register', {
            email: email,
            password: password,
            nama: nama,
            asal_universitas: asal_universitas,
            pekerjaan: pekerjaan
        })
        .then(response => { 
            console.log(response)
            console.log(alert)
            if (response.status === 201) {
                setAlertTo("success");
                setTimeout(() => {
                    window.location.href = "/login";
                }, 2000);
            }
            else {
                setAlertTo("error");
            }
        })
        .catch(error => {
            console.log(error.response)
            console.log(alert)
            setAlertTo("error")
        });     
    }

    const setAlertTo = (alert) => {
        setAlert(alert);
        parentCallback(alert)
        console.log(alert)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}  className={classes.root}>
                <div>
                    <TextField variant="outlined"
                        name="nama"
                        label="Nama"
                        type="text"
                        {...register('nama')}
                        fullWidth 
                        size='small'
                    />
                </div>
                
                <div>
                    <TextField variant="outlined"
                        name="email"
                        label="Email"
                        type="email"
                        {...register('email')}
                        fullWidth 
                        size='small'
                    />
                </div>

                <div>
                    <TextField variant="outlined"
                        name="password"
                        label="Password"
                        type="password"
                        {...register('password', {
                        validate: (value) => value.length > 8
                        })}
                        fullWidth 
                        size='small'
                    />
                </div>
                
                {errors.password && <p>Your password is less than 8 characters</p>}

                <div>
                    <TextField variant="outlined"
                        name="asal_universitas"
                        label="Asal Universitas"
                        type="text"
                        {...register('asal_universitas')}
                        fullWidth 
                        size='small'
                    />
                </div>

                <div>
                    <TextField variant="outlined"
                        name="pekerjaan"
                        label="Pekerjaan"
                        type="text"
                        {...register('pekerjaan')}
                        fullWidth 
                        size='small'
                    />
                </div>


                <SubmitBtn value="Daftar" />
            </form>
        </Fragment>
    );
}