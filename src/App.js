import React from 'react';
import {render} from 'react-dom'
import {withFormik,Form,Field} from 'formik'
import * as Yup from 'yup'

const App = ({
  values,
  handleChange

}) => (
  <Form>
    <Field type='text' name='firstname' placeholder='Firstname'/>
    <Field type='text' name='lastname' placeholder='Lastname'/>
  <Field type='text' name='state' placeholder='State'/>
    <Field type='text' name='city' placeholder='city'/>
  <button>Submit</button>
  </Form>
)
export {App};
