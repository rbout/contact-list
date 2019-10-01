import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { grey, teal } from "@material-ui/core/colors";
import Dialog from '@material-ui/core/Dialog';
import {DialogContent} from "@material-ui/core";
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold',
        fontSize: 30,
    },
    fab: {
        margin: theme.spacing(1),
        fontSize: 8,
    },
    cancelButton: {
        left: theme.spacing(1),
        position: 'absolute',
    },
    nameDiv: {
        float: 'right',
        margin: 15,
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: { main: grey[50] },
        secondary: { main: teal[400] }
    },
});

export default function ButtonAppBar() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [userFields, setUserFields] = useState({
        email: '',
        phone: '',
        firstName: '',
        lastName: ''
    });

    const handleEmailChange = (event) => {
        setUserFields({ ...userFields, email: event.target.value });
    };

    const handlePhoneChange = (event) => {
        setUserFields({ ...userFields, phone: event.target.value });
    };

    const handleFirstNameChange = (event) => {
        setUserFields({ ...userFields, firstName: event.target.value });
    };

    const handleLastNameChange = (event) => {
        setUserFields({ ...userFields, lastName: event.target.value });
    };

    const handleSaveClick = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            My Contacts
                        </Typography>
                        <Fab color="primary" aria-label="add" className={classes.fab} size={'medium'} onClick={handleClickOpen}>
                            <AddIcon />
                        </Fab>
                    </Toolbar>
                </AppBar>
                <Dialog open={open} onClose={handleClose}>
                    <DialogActions>
                        <Button onClick={handleClose} color={"secondary"} className={classes.cancelButton}>
                            Cancel
                        </Button>
                        <Button onClick={handleSaveClick} color={"secondary"}>
                            Save
                        </Button>
                    </DialogActions>
                    <DialogContent>
                        <DialogContentText>
                            Add new contact
                        </DialogContentText>
                        <Fab color="secondary" aria-label="add-photo" className={classes.fab} size={"large"}>
                            Add Photo
                        </Fab>
                        <div className={classes.nameDiv}>
                            <TextField
                                margin="dense"
                                id="first-name"
                                label="First Name"
                                color={"secondary"}
                                onChange={handleFirstNameChange}
                            />
                            <br />
                            <TextField
                                margin="dense"
                                id="last-name"
                                label="Last Name"
                                color={"secondary"}
                                onChange={handleLastNameChange}
                            />
                        </div>
                        <br />
                        <TextField
                            margin="normal"
                            id="email"
                            label="Email Address"
                            type="email"
                            color={"secondary"}
                            onChange={handleEmailChange}
                            fullWidth={true}
                        />
                        <br />
                        <TextField
                            margin="normal"
                            id="phone"
                            label="Phone Number"
                            color={"secondary"}
                            onChange={handlePhoneChange}
                            fullWidth={true}
                        />
                    </DialogContent>
                </Dialog>
            </ThemeProvider>
        </div>
    );
}
