import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      {/* <div className={styles.wrapper}> */}
      {/* <nav>
        <ul className={styles.nav}>
          <li> */}
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Login
            </NavLink>
          {/* </li>
          <li> */}
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Registration
            </NavLink>
          {/* </li>
        </ul> */}
      {/* </nav> */}
      {/* </div> */}
    </>
  );
};

export default AuthNav;
