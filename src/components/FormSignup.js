import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import axios from "axios";

import AuthService from '../services/auth.service';

import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';

import SubmitBtn from './SubmitBtn';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '200px',
      },
    },
}));

export default function FormLogin(props) {
    const classes = useStyles();

    const {
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        handleLogin(
            data.nama, 
            data.email, 
            data.password,
            data.asal_universitas,
            data.pekerjaan)
    };

    function handleLogin (nama, email, password, asal_universitas, pekerjaan) {
        console.log(email, password)

        axios.post('register', {
            email: email,
            password: password,
            nama: nama,
            asal_universitas: asal_universitas,
            pekerjaan: pekerjaan
        })
        .then(response => { 
            if (response.data.code == 201) {
                
            }
            console.log(response)
            // console.log(AuthService.getToken())
        })
        .catch(error => {
            console.log(error.response)
        });   
    }

    return (
        <Fragment>
            <Alert variant="filled" severity="success">Akun Berhasil terdaftar. Silakan login!</Alert>
            <Alert variant="filled" severity="error">Akun sudah terdaftar. Gunakan email yang lain.</Alert>

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

            <div className="text--center mt-20">
                <p className="mb-10">Belum punya akun?</p>
                <a className="link mt-10" href="/daftar">Daftar</a>
            </div>               
        </Fragment>
    );
}