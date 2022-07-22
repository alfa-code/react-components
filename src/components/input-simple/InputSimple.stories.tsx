import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Formik, Field, Form } from 'formik';

import { InputSimple } from './index';

export default {
  title: 'Components/InputSimple',
  component: InputSimple,
};

const Template: ComponentStory<typeof InputSimple> = (args) => {
  return (
    <InputSimple
      type='text'
      // value={ args.value }
      placeholder={args.placeholder}
    />
  )
}

const TemplateWithFormik: ComponentStory<typeof InputSimple> = (args) => {
  return (
    <Formik
      initialValues={{
        title: args.value,
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formikProps) => {
        console.log('formikProps:', formikProps);
        return (
          <Form>
            <Field name="title">
              {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                meta, // value, touched, error, and initialValue
              }: any) => {
                return (
                  <InputSimple
                    type='text'
                    value={field.value}
                    name={field.name}
                    onChange={(e: any) => {
                      field.onChange(e);
                    }}
                    onBlur={field.onBlur}
                    touched={meta.touched}
                    error={meta.error}
                    placeholder={args.placeholder}
                  />
                )
              }}
            </Field>
            <button type="button" onClick={ (e) => {
              e.preventDefault();
              formikProps.setFieldValue('title', args.value);
            } }>
              Установить новое значение для поля сверху
            </button>
          </Form>
        )
      }
      }
    </Formik>
  )
}

export const Main = Template.bind({});

Main.args = {
  // value: 'test',
  placeholder: 'Заглушка'
};

export const WithFormik = TemplateWithFormik.bind({});

WithFormik.args = {
  value: 'test',
  placeholder: 'Заглушка'
};
