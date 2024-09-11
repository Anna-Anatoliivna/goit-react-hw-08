import { useSelector } from 'react-redux';
import styles from './AppBar.module.css';
import AuthNav from '../AuthNav/AuthNav';
import { Container } from '../Container/Container';
import { Navigation } from '../Navigation/Navigation';
import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <header className={styles.header}>
      <Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </header>
  );
};

export default AppBar;
