import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Container } from '../components/Container/Container';
import { SearchBox } from '../components/SearchBox/SearchBox';
import {
  // selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from '../redux/contacts/selectors';
import Loader from '../components/Loader/Loader';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const ContactsPage = () => {
  const dispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchContacts())
       .unwrap()
       .then(() => {
         toast.success('Contacts loaded succsessfully');
       });
   }, [dispatch]);
  
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  
  return (
    <Container>
      {isLoading && <Loader />}
      {error !== null && <p>{error}. Please try again later.</p>}
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
