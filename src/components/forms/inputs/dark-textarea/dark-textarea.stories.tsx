import { storiesOf } from '@storybook/react';
import {
  Formik, Form, Field,
} from 'formik';
import { Fields } from '../../fields';
import 'twin.macro';

storiesOf('DarkTextarea', module).add('DarkTextarea', () => (
  <div tw="bg-monochrome-dark p-6">
    <h1>Signup</h1>
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      onSubmit={values => {
        alert(JSON.stringify(values));
      }}
      validate={values => {
        const errors = {} as any;

        if (!values.name) {
          errors.name = 'Required';
        }

        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
    >
      <Form tw="w-40 space-y-4">
        <Field name="name" disabled component={Fields.DarkTextarea} placeholder="enter name" />
        <Field name="email" component={Fields.DarkTextarea} placeholder="enter email" />
      </Form>
    </Formik>
  </div>
));
