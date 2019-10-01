import React, { Component } from 'react';
import Appbar from './Appbar';
import Contacts from './Contacts';
import {createMuiTheme} from "@material-ui/core";
import {grey, teal} from "@material-ui/core/colors";
import { ThemeProvider } from '@material-ui/styles';

class App extends Component {
    state = {
        contacts: []
    };


    addContacts = contacts => {
            const newContact = [...this.state.contacts];
            newContact.push(contacts);
            this.setState({ ...this.state, contacts: newContact });
    };

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
                    <Contacts contacts={contacts} />
                </ThemeProvider>
            </div>
        );
    }
}
export default App;