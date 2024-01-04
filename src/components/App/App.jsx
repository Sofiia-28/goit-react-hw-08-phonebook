import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Wrapper } from './App.styled';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";
import { selectedError, selectedIsLoading } from "../../redux/selectors";
import { Loader } from '../Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectedIsLoading);
  const error = useSelector(selectedError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && 
      (
        <>
          <Loader />
        </>
      )}
      <ContactList />
    </Wrapper>
  );
};
