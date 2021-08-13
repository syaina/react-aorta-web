import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';

export default function Spinner () {
    return(
        <div className="center loading-container"> 
            <CircularProgress/>
        </div>
    )
}