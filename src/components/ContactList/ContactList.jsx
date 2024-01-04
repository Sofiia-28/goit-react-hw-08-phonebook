import { Wrapper, Button } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectedFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const filteredContacts = useSelector(selectedFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Wrapper key={id}>
            <li>
              {name}: {number}
            </li>
            <Button onClick={() => dispatch(deleteContact(id))} type="button">
              Delete
            </Button>
          </Wrapper>
        );
      })}
    </ul>
  );
};
