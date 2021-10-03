import React from 'react';
import * as Mui from '@material-ui/core';


export default function Notification(props) {
    const {notify, setNotify} = props;

    const handleClose = (event, reason) => {
        setNotify({...notify, isOpen: false})
    }
    return(
         <Mui.Snackbar
        open={notify.isOpen}
        autoHideDuration ={1000}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        onClose={handleClose}
        >
            <Mui.Alert severity={notify.type} onClose={handleClose}>
                {notify.message}
                
            </Mui.Alert>
        </Mui.Snackbar> 
    )
}