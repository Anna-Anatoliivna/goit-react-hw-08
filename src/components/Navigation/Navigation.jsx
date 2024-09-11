import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
