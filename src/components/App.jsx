import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import {
  getContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Title, SubTitle, Message } from 'components/App.styled';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
export default function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 && <Filter />}
      {!isLoading && !error && contacts.length === 0 && (
        <Message>There is not any contacts</Message>
      )}
      <ContactList />
    </Container>
  );
}
