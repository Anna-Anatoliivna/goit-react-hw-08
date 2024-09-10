import ContactForm from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Container } from "../components/Container/Container";
import { SearchBox } from "../components/SearchBox/SearchBox";


const ContactsPage = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Container>
  );
}

export default ContactsPage