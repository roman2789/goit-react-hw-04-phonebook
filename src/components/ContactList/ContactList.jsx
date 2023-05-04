import PropTypes from 'prop-types';
import { List, Item, DelButton } from './ContactListStyled';

export const ContactList = ({ filteredContacts, onClickDeleteContact }) => {
  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <span>{contact.name}</span>: <span>{contact.number}</span>
          <DelButton
            type="button"
            onClick={() => onClickDeleteContact(contact.id)}
          >
            Delete
          </DelButton>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickDeleteContact: PropTypes.func.isRequired,
};
