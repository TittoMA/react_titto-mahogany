import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const styles = {
  errorText: {
    color: '#f5392c',
    margin: 0,
    marginTop: 5,
  },
};
const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(2, 'Too Short!').max(50).required('Required'),
      lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
      email: Yup.string().email().required('Required'),
      message: Yup.string().min(2, 'Too Short!').required('Required'),
    }),
    onSubmit: (values) => {
      alert(`Succes submit form! 
      Name: ${values.name}
      Lastname: ${values.lastName}
      Email: ${values.email}
      Message: ${values.message}
      `);
    },
  });
  return (
    <div id='contact' className='bg-dark text-light'>
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-7'>
            <h1 className='text-center'>Contact us</h1>
            <p className='text-center'>fill the form below to get in touch with us.</p>
            <hr />

            <Form onSubmit={formik.handleSubmit} id='contact-form' className='pb-5'>
              <div className='d-flex gap-3'>
                <FormGroup className='mb-3 flex-grow-1'>
                  <Label htmlFor='contact-name' className='form-label'>
                    First Name
                  </Label>
                  <Input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='First Name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <p style={styles.errorText}>{formik.errors.name}</p>
                  )}
                </FormGroup>
                <FormGroup className='mb-3 flex-grow-1'>
                  <Label htmlFor='contact-lastname' className='form-label'>
                    Last Name
                  </Label>
                  <Input
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='Last Name'
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.lastName && formik.touched.lastName && (
                    <p style={styles.errorText}>{formik.errors.lastName}</p>
                  )}
                </FormGroup>
              </div>
              <FormGroup className='mb-3'>
                <Label htmlFor='contact-email' className='form-label'>
                  Email
                </Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='your@email.com'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <p style={styles.errorText}>{formik.errors.email}</p>
                )}
              </FormGroup>
              <FormGroup className='mb-4'>
                <Label htmlFor='contact-message' className='form-label'>
                  Message
                </Label>

                <textarea
                  id='message'
                  name='message'
                  className='form-control'
                  rows={3}
                  placeholder='Your message...'
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.message && formik.touched.message && (
                  <p style={styles.errorText}>{formik.errors.message}</p>
                )}
              </FormGroup>
              <Button type='submit' color='light' className='rounded-pill px-4'>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
