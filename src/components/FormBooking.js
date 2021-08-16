import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
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
        minWidth: 120,
        maxWidth: 350,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

export default function FormBooking({parentCallback}) {
    const classes = useStyles();
    const [products, setProducts] = useState([]);

    const [produk, setProduk] = useState();
    const [produkLainnya, setProdukLainnya] = useState("");
    const [noHandphone, setNoHandphone] = useState()
    const [tanggal, setTanggal] = useState(new Date('2021-08-16T21:11:54'));

    const [anotherOption, setAnotherOption] = useState(false);
    

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
                        produk: resp.produk,
                    });
                 });

                setProducts(respProduct);
            } 
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [products])

    useEffect(() => {  
        produk === "other" ? setAnotherOption(true) : setAnotherOption(false)
        parentCallback(produk, noHandphone, produkLainnya, tanggal)
        console.log(tanggal)
    }, [produk, noHandphone, produkLainnya, tanggal]);

    const showAnotherOption = () => {
        setAnotherOption(true)
    }

    return (
        <Fragment>
            <form className={classes.root}>
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
                            <MenuItem value="other" onSelected={() => showAnotherOption()}>Lainnya</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                {
                    anotherOption ?  
                        <div className=""> 
                            <TextField 
                                variant="outlined" 
                                name="other"
                                label="Produk Lainnya"
                                type="text"
                                value={produkLainnya}
                                onChange={(event) => setProdukLainnya(event.target.value)}
                                fullWidth
                            />
                        </div>
                    : null
                }

                <div className="">
                    <TextField 
                        variant="outlined"
                        name="no_handphone"
                        label="No. Handphone/WA"
                        type="tel"
                        value={noHandphone}
                        onChange={(event) => {setNoHandphone(event.target.value)}}
                        fullWidth
                    />
                </div>

                <div className="mt-1 mb-5">
                    <TextField
                        variant="outlined"
                        name="tanggal"
                        label="Tanggal Kelas"
                        type="date"
                        id="date"
                        format="dd/MM/yyyy"
                        value={tanggal}
                        onChange={(event) => {setTanggal(event.target.value)}}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </form>              
        </Fragment>
    );
}