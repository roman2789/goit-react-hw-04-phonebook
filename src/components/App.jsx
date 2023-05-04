import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Container, TitlePhoneBook, TitleContacts } from './AppStyled';
import { useState, useEffect } from 'react';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contact = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contact);
    if (parsedContacts) {
      return parsedContacts;
    } else {
      return initialContacts;
    }
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const onFilterContacts = () => {
    let filteredContacts = [];

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
  const addContact = ({ name, id, number }) => {
    const contact = { id, name, number };
    const nameComparison = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    setContacts(prevContacts => {
      if (nameComparison) {
        alert(`${name} is already in contacts`);
        return;
      }
      return [contact, ...prevContacts];
    });
  };
  const deleteContactHandle = dataId => {
    let filterdList = contacts.filter(contact => contact.id !== dataId);
    setContacts([...filterdList]);
  };

  return (
    <Container>
      <TitlePhoneBook>Phonebook</TitlePhoneBook>
      <ContactForm onSubmit={addContact} />
      <TitleContacts>Contacts</TitleContacts>
      <Filter filter={filter} onFilter={handleFilter} />

      <ContactList
        filteredContacts={onFilterContacts()}
        onClickDeleteContact={deleteContactHandle}
      />
    </Container>
  );
};
