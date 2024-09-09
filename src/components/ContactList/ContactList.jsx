import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import styles from './ContactList.module.css';
import {
  // selectContacts,
  selectFilteredContacts
} from '../../redux/contacts/contactsSlice';


export const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filterValue = useSelector(selectFilteredContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  // const filteredContacts = contacts.filter(contact => {
  //       if (contact.name) {
  //     return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  //   }
  //   return false;
  // });

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              />
          </li>
        ))}
      </ul>
    </div>
  );
};
