import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').required('This field is required'),
});

const phoneSchema = Yup.string().matches(
  /^\+\d{3}\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/,
  'Invalid phone number format (e.g., +380(99) 999-99-99)'
);

export const ContactForm = ({ onAdd }) => (
  <Formik
    initialValues={{
      name: '',
      number: '',
    }}
    validationSchema={schema}
    onSubmit={(values, helpers) => {
      onAdd( values );
      helpers.resetForm();
    }}
  >
    <Form>
      <label>
        Name
        <Field name="name" placeholder="Jane Smit" />
        <ErrorMessage name="name" />
      </label>

      <label>
        Number
        <Field
          name="number"
          validate={value => {
            try {
              phoneSchema.validateSync(value);
            } catch (error) {
              return error.message;
            }
          }}
        >
          {({ field }) => (
            <InputMask
              {...field}
              mask="+380(99) 999-99-99"
              placeholder="+380(99) 999-99-99"
            />
          )}
        </Field>
        <ErrorMessage name="number" />
      </label>

      <button type="submit">Add contact</button>
    </Form>
  </Formik>
);
