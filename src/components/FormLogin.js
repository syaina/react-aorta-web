import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";

import SubmitBtn from './SubmitBtn';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import AuthService from '../services/auth.service';

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
                localStorage.setItem("nama", JSON.stringify(response.data.result.nama));
                localStorage.setItem("email", JSON.stringify(response.data.result.email));
                setAlertTo("success");
                setTimeout(() => {
                    window.location.href = "/";
                }, 1000);
            }
            console.log(response)
            console.log(AuthService.getToken())
        })
        .catch(error => {
            console.log(error.response)
        });   
    }

    const setAlertTo = (alert) => {
        setAlert(alert);
        parentCallback(alert)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}  className={classes.root}>
                <div className="mt-5">
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
        </Fragment>
    );
}