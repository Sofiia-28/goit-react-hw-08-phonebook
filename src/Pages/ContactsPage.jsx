import { ContactsForm } from '../components/ContactsForm/ContactsForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectedError, selectedIsLoading } from '../redux/contacts/selectors';
import { Loader } from '../components/Loader';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectedIsLoading);
  const error = useSelector(selectedError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ padding: '0 20px', textAlign: 'center' }}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <>
          <Loader />
        </>
      )}
      <ContactList />
    </div>
  );
}
