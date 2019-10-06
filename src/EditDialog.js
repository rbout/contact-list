import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import {DialogContent, makeStyles} from "@material-ui/core";
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from "@material-ui/core/DialogActions";
import EditIcon from '@material-ui/icons/Edit';
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    cancelButton: {
        left: theme.spacing(1),
        position: 'absolute',
    },
}));

const EditDialog = props => {

    const classes = useStyles();

    const { contact, editContact } = props;

    const [open, setOpen] = React.useState(false);

    const [userFields, setUserFields] = useState({
        email: contact.email,
        phone: contact.phone,
        name: contact.name,
        avatarImg: ''
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNameChange = (event) => {
        setUserFields({...userFields, name: event.target.value});
    };

    const handleEmailChange = (event) => {
        setUserFields({...userFields, email: event.target.value});
    };

    const handlePhoneChange = (event) => {
        setUserFields({...userFields, phone: event.target.value});
    };

    return(
        <div className={classes.root}>
            <Fab aria-label="edit" className={classes.fab} style={{marginRight: '1rem'}} onClick={handleClickOpen}>
                <EditIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} maxWidth={true}>
                <DialogActions >
                    <Button onClick={handleClose} color={"secondary"} className={classes.cancelButton}>
                        Cancel
                    </Button>
                    <Button color={"secondary"} onClick={() => {
                        setOpen(false);

                        editContact({
                            email: userFields.email,
                            name: userFields.name,
                            phone: userFields.phone,
                        }, contact);
                    }}>
                        Edit
                    </Button>
                </DialogActions>
                <DialogContent>
                    <TextField
                        id={"name"}
                        label={contact.name}
                        onChange={handleNameChange}
                    />
                    <br />
                    <TextField
                        id={"email"}
                        label={contact.email}
                        type={"email"}
                        onChange={handleEmailChange}
                    />
                    <br />
                    <TextField
                        id={"phone"}
                        label={contact.phone}
                        type={"number"}
                        onChange={handlePhoneChange}
                    />
                </DialogContent>
            </Dialog>
        </div>
    )
};

export default EditDialog;