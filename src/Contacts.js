import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import EditDialog from './EditDialog';

export class Contacts extends Component {

    delete(id) {
        this.props.delete(id);
    }

    render() {
        const classes = makeStyles(theme => ({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
            fab: {
                margin: theme.spacing(1),
                display: 'inline-block',
            },
        }));

        const { contacts, editContact } = this.props;

        return (
            <Grid container spacing={0}>
            {contacts.slice(0).reverse().map(contact => {
                    return <Grid item xs={12} key={contact.email} style={{ marginBottom: '1rem' }}>
                        <Paper className={classes.paper} style={{ padding: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                <Avatar src={contact.avatarImg} style={{marginRight: '1rem'}} />

                                <div style={{marginRight: '90rem', width: '15rem'}}>
                                    <h4>{contact.name}</h4>
                                    <p>{contact.email}</p>
                                </div>
                                    <EditDialog contact={contact} editContact={editContact} />
                                    <Fab aria-label="delete" className={classes.fab} onClick={this.delete.bind(this, contact)}>
                                        <DeleteIcon />
                                    </Fab>
                            </div>
                        </Paper>
                    </Grid>
                })}
            </Grid>
        )
    }
}

export default Contacts;