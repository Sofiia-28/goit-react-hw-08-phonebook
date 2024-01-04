import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectedContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactsForm.module.css';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.number().min(3, 'At least 3').required('Required'),
});

export const ContactsForm = () => {
  const contacts = useSelector(selectedContacts);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        const isExist = contacts.find(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        );
        if (isExist) {
          alert(`${isExist.name} is already in contacts`);
        } else {
          dispatch(addContact(values));
        }
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.label}>Name</label>
        <Field className={css.input} type="text" name="name" />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.label}>Number</label>
        <Field className={css.input} type="tel" name="number" />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
