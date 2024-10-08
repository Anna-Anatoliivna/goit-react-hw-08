import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectContacts, selectFilteredContacts } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {contacts.length === 0 && <p>Contact list is empty!</p>}
        {filteredContacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </div>
  );
};
