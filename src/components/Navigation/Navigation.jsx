import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';
import { useSelector } from 'react-redux';
import {
  selectAuthIsLoggedIn,
  selectAuthUser,
} from '../../redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
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
              {isLoggedIn ? (
                <>
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
                  <div>
                    <p>Hellow, {user.name}!</p>
                    <p>Email: {user.email}</p>
                  </div>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                      }
                    >
                      Registration
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
