import AuthNav from '../AuthNav/AuthNav';
import { Container } from '../Container/Container';
import { Navigation } from '../Navigation/Navigation';

const AppBar = () => {
  return (
    <Container>
      <Navigation />
      <AuthNav />
    </Container>
  );
};

export default AppBar;
