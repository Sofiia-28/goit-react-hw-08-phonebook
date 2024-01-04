import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectedFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectedFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.wrapper}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
            <li key={id} className={css.item}>
              <span>Name: <span className={css.name}>{name}</span></span>
              <span>Tel: {number}</span>
              <button className={css.btn} onClick={() => dispatch(deleteContact(id))} type="button">
              Delete
            </button>
            </li>
        );
      })}
    </ul>
  );
};
