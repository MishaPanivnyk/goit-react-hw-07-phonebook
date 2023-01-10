import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactSlice';
import { ContactListItem } from 'components/ContactList/Contact/Contact.styled';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <ContactListItem>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </ContactListItem>
  );
}

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
