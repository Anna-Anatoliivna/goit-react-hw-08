
import { Container } from '../components/Container/Container';



const HomePage = () => {
  return (
    <Container>
      <h1>Phonebook App for you!</h1>
      <img
        src="/img/phonebook.png"
        alt="Phonebook app"
        width="1087"
        height="873"
      />
      <p>
        Phonebook is an application for storing phone contacts in convenient
        text form. Access to the information is protected by authorization. The
        application is lightweight and easy to use.
      </p>
    </Container>
  );
};

export default HomePage;
