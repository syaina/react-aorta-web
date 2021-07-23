import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import AuthService from '../services/auth.service';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
        minWidth: '120px',
        maxWidth: '350px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
    formControl: {
        width: '100%',
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 350,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

export default function FormBooking({parentCallback}) {
    const classes = useStyles();
    const [alert, setAlert] = useState("");
    const [produk, setProduk] = useState();
    const [noHandphone, setNoHandphone] = useState()
    const [products, setProducts] = useState([]);
    
    const {
        handleSubmit, 
        formState: { errors }
    } = useForm();

    useEffect(() => {
        const endpoint = "/produk";
        axios
        .get(endpoint)
        .then((response) => {
            if (response.status === 200) {
                let respProduct = [];

                response.data.results.map((resp) => {
                    respProduct.push({
                        id_produk: resp.id_produk,
                        produk: resp.produk
                    });
                 });

                setProducts(respProduct);
            } 
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [products])

    const onSubmit = (data) => {
        console.log(produk)
        console.log(noHandphone)
    };

    function handleBooking (email, password) {
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

    useEffect(() => {   
        parentCallback(produk, noHandphone)
    }, [produk, noHandphone]);

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}  className={classes.root}>
                <div className="">
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Produk</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={produk}
                        onChange={(event) => setProduk(event.target.value)}
                        label="Produk"
                        >
                            {
                                products.map((product) => (
                                    <MenuItem value={product.id_produk}>{product.produk}</MenuItem>
                                
                                ))
                            }
                    </Select>
                </FormControl>
                </div>

                <div className="mb-5">
                    <TextField variant="outlined"
                        name="no_handphone"
                        label="No. Handphone/WA"
                        type="text"
                        onChange={(event) => {setNoHandphone(event.target.value)}}
                        fullWidth
                    />
                </div>



                {errors.password && <p>Your password is less than 8 characters</p>}


                {/* <SubmitBtn value="Masuk" /> */}
            </form>              
        </Fragment>
    );
}