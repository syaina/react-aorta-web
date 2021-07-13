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
        handleLogin(data.email, data.password)
    };

    function handleLogin (email, password) {
        console.log(email, password)

        axios.post('login', {
            email: email,
            password: password
        })
        .then(response => { 
            if (response.data.result.token) {
              localStorage.setItem("token", JSON.stringify(response.data.result.token));
            }
            // console.log(response)
            // console.log(AuthService.getToken())
        })
        .catch(error => {
            console.log(error.response)
        });   
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}  className={classes.root}>
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


                <SubmitBtn value="Masuk" />
            </form>

            <div className="text--center mt-20">
                <p className="mb-10">Belum punya akun?</p>
                <a className="link mt-10" href="/daftar">Daftar</a>
            </div>               
        </Fragment>
    );
}