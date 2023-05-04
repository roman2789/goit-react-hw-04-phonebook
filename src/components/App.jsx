import { Component } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { Container, TitlePhoneBook, TitleContacts } from './AppStyled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contact = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contact);
    parsedContacts && this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contsacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  onFilterContacts = () => {
    let filteredContacts = [];
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    if (filter) {
      filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
    return filteredContacts;
  };

  addContact = ({ name, id, number }) => {
    const contact = { id, name, number };
    const nameComparison = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    this.setState(({ contacts }) => {
      if (nameComparison) {
        alert(`${name} is already in contacts`);
        return;
      }
      return { contacts: [contact, ...contacts] };
    });
  };

  deleteContactHandle = dataId => {
    let filterdList = this.state.contacts.filter(
      contact => contact.id !== dataId
    );
    this.setState(prevState => {
      return { ...prevState, contacts: [...filterdList] };
    });
  };

  render() {
    return (
      <Container>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactForm onSubmit={this.addContact} />
        <TitleContacts>Contacts</TitleContacts>
        <Filter filter={this.state.filter} onFilter={this.handleFilter} />

        <ContactList
          filteredContacts={this.onFilterContacts()}
          onClickDeleteContact={this.deleteContactHandle}
        />
      </Container>
    );
  }
}
