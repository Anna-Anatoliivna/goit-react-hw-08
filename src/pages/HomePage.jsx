// import Loader from '../components/Loader/Loader';
// import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { Container } from '../components/Container/Container';
import { ContactList } from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import { SearchBox } from '../components/SearchBox/SearchBox';


const HomePage = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Container>
  );
};

export default HomePage;
