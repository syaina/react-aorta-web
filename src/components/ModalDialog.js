import React, {useState, useEffect} from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

const ModalDialog = (props) => {
    const[isOpen, setOpen] = useState(true)
    return (
        <Dialog open={isOpen} maxWidth="xs" fullWidth> 
            <DialogTitle>{props.modalTitle}</DialogTitle>
            <Box position="absolute" top={0} right={0}>
                <IconButton onClick={() => {setOpen(false);}}>
                    <Close />
                </IconButton>
            </Box>
            <DialogContent>
                <Typography>{props.modalContent}</Typography>
            </DialogContent>
            <DialogActions>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                    setOpen(false);
                    }}
                >
                    {props.button}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalDialog;