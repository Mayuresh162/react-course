// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => (

  <div className='flex justify-center'>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col border-2 w-52 p-5 m-5 justify-evenly h-40'>
          <Field type="email" name="email" className='border-2'/>
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" className='border-2'/>
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting} className="h-14 bg-gray-500 text-white p-2">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login;