import React, { useState } from 'react';
import Alert from '@material-ui/lab/Alert';

export default function AlertMessage (props) {
    return(
        <Alert 
        variant="filled" 
        severity={props.severity}
        position="absolute"
        >
            {props.message}
        </Alert>
    )
} 