import { useState } from 'react';
import { storiesOf } from '@storybook/react';
import {
  Formik, Form, Field,
} from 'formik';
import { Fields } from '../../fields';
import 'twin.macro';
import { DarkFormGroup } from '../../dark-form-group';
import { DisabledFormGroup } from '../../disabled-form-group';
import { Checkbox, Inputs } from '..';
import { Select } from '../select';

storiesOf('Input', module).add('Input types', () => {
  const [tab, setTab] = useState('general');
  return (
    <div tw="p-10 bg-monochrome-dark100">
      <h1>Signup</h1>
      <div onClick={() => setTab('General')}>General</div>
      <div onClick={() => setTab('System')}>System</div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          agentId: 'dev-pet',
          buildVersion: '1.1.1',
          agentType: 'Elm',
          agents: [{ id: '123q' }, { id: '223q' }, { id: '323q' }],
        }}
        onSubmit={values => {
          alert(JSON.stringify(values));
        }}
      >
        <Form tw="w-40 space-y-4" autoComplete="off">
          <Field name="agentType" component={Select} options={['Java', 'Js', 'Net']} placeholder="Choose your option" />
          <Field name="agents" value="All selected">
            {({ field }) => (
              <Select value={field.value[2].id} placeholder="Choose your option">
                {field.value.map(({ id }) => (
                  <label>
                    <Field
                      tw="text-blue-default"
                      name={id}
                      type="checkbox"
                      component={Checkbox}
                    />
                    {id}
                  </label>
                ))}
              </Select>
            )}
          </Field>
          <Field name="name" component={Fields.Input} placeholder="enter name" />
          <Field name="email" component={Fields.Input} placeholder="enter email" />
          <div tw="space-y-8">
            <DarkFormGroup label="Agent name">
              <Field name="name" component={Fields.DarkInput} placeholder="Enter agent's name" />
            </DarkFormGroup>
            {tab === 'General' && (
              <DarkFormGroup label="Agent type">
                <Field name="agentType" options={['Java', 'Js', '.Net']} component={Inputs.Select} placeholder="Enter agent's name" />
              </DarkFormGroup>
            )}
            {tab === 'System' && (
              <DarkFormGroup label="Description" optional>
                <Field
                  name="description"
                  component={Fields.DarkTextarea}
                  normalize={(str: string) => str.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, '')}
                  placeholder="Add agent's description"
                />
              </DarkFormGroup>
            )}
          </div>
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </div>
  );
});
