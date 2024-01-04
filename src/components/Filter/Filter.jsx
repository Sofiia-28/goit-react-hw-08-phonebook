import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectedFilter } from '../../redux/contacts/selectors';
import { onSearch } from '../../redux/contacts/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <label className={css.label}>Find contacts by name:</label>
      <input
        className={css.input}
        type="search"
        value={filter}
        onChange={evt => dispatch(onSearch(evt.target.value))}
      />
    </div>
  );
};
