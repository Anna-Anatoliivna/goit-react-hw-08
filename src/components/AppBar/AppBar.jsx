import { useSelector } from 'react-redux';
import styles from './AppBar.module.css';
import AuthNav from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
