import React, { Component } from 'react';
import Appbar from './Appbar';
import Contacts from './Contacts';
import {createMuiTheme} from "@material-ui/core";
import {grey, teal} from "@material-ui/core/colors";
import { ThemeProvider } from '@material-ui/styles';

class App extends Component {
    constructor() {
        super();
        this.state = {
            contacts: []
        };
        this.deleteContact = this.deleteContact.bind(this);
    }

    addContacts = contacts => {
            const newContact = [...this.state.contacts];
            newContact.push(contacts);
            this.setState({ ...this.state, contacts: newContact });
    };

    editContact = ( newContacts, prevContact ) => {
        const newContactList = this.state.contacts.filter(el => el !== prevContact);
        newContactList.push(newContacts);
        this.setState({...this.state, contacts: newContactList});
    };

    deleteContact(id) {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(el => el !== id)
        }));
    }

    render() {

        const { contacts } = this.state;

        const theme = createMuiTheme({
            palette: {
                primary: { main: grey[50] },
                secondary: { main: teal[400] }
            },
        });

        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Appbar addContacts={this.addContacts} theme={theme}/>
                    <Contacts contacts={contacts} delete={this.deleteContact} addContacts={this.addContacts}
                        editContact={this.editContact}
                    />
                </ThemeProvider>
            </div>
        );
    }
}
export default App;