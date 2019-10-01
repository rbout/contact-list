import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DeleteIcon from '@material-ui/icons/Delete';

export class Contacts extends Component {

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
            },
            contactDiv: {
                display: 'inline-block',
            }
        }));

        const { contacts } = this.props;

        return (
            <Grid container spacing={0}>
            {contacts.slice(0).reverse().map(contact => {
                    return <Grid item xs={12} key={contact.email} style={{ marginBottom: '1rem' }}>
                        <Paper className={classes.paper} style={{ padding: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                <div className={classes.contactDiv}>
                                    <h4>{contact.name}</h4>
                                    <p>{contact.email}</p>
                                </div>
                                <div className={classes.contactDiv} style={{float: 'right'}}>
                                    <Fab aria-label="delete" className={classes.fab}>
                                        <DeleteIcon />
                                    </Fab>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                })}
            </Grid>
        )
    }
}

export default Contacts;