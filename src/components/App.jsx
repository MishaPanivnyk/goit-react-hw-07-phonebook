import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { getContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { Container, Title, SubTitle, Message } from 'components/App.styled';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 && <Filter />}
      {contacts.length === 0 && <Message>There is not any contacts</Message>}
      <ContactList />
    </Container>
  );
}
