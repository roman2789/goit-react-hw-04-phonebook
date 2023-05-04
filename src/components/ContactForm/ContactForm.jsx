import { Component } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import { AddButton, FormLabel, MainForm, Input } from './ContactFormStyled';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PHONE_NO_REGEX = /^[0-9\- ]{8,14}$/;
const requiredSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().matches(PHONE_NO_REGEX, {
    message: 'please enter the valid phone number!',
    excludeEmptyString: true,
  }),
});

const initialValues = { name: '', number: '' };

class ContactForm extends Component {
  handleFormSubmit = ({ name, number }, { resetForm }) => {
    const id = nanoid();
    this.props.onSubmit({ id, name, number });
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={requiredSchema}
        onSubmit={this.handleFormSubmit}
      >
        <MainForm>
          <FormLabel htmlFor="name">
            Name
            <Input type="text" name="name" />
            <ErrorMessage name="name" />
          </FormLabel>
          <FormLabel htmlFor="number">
            Number
            <Input type="tel" name="number" />
            <ErrorMessage name="number" />
          </FormLabel>
          <AddButton type="submit">Add contact</AddButton>
        </MainForm>
      </Formik>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
