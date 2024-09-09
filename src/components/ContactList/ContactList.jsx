import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/filters/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

 
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </div>
  );
};
