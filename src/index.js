import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FormGroup,Button,Label,Jumbotron} from 'reactstrap'
import {withFormik,Form,Field} from 'formik'

import * as Yup from 'yup'



const App=({
  values,
  errors,
  touched,
  isSubmitting

})=>(
  <Jumbotron>
<Form>
  <FormGroup>
  <Label for="firstname">FirstName</Label>
  <Field type='text' name='firstname' component={customInputForm}placeholder='Firstname'/>
  </FormGroup>
  <FormGroup>
    <Label for="lastname">LastName</Label>
  <Field type='text' name='lastname' component={customInputForm} placeholder='Lastname'/>
  </FormGroup>
  <FormGroup>
    <Label for="state">State</Label>
  <Field type='text' name='state' component={customInputForm} placeholder='State'/>
  </FormGroup>
  <FormGroup>
    <Label for="city">City</Label>
  <Field type='text' name='city' component={customInputForm} placeholder='City'/>
  </FormGroup>
  <Button disabled={isSubmitting}>Submit</Button>

</Form>
</Jumbotron>
)
const customInputForm = ({field, form: {touched, errors}, ...props}) => (
    <div>
        <input
            invalid={!!(touched[field.name] && errors[field.name])}
            {...field}
            {...props} />
        {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
);

const ReactApp = withFormik({
  mapPropsToValues({firstname,lastname,state,city}) {
    return  {
      firstname:firstname || '',
      lastname:lastname || '',
      state:state || '',
      city:city || ''
    }
  },
  validationSchema:Yup.object().shape({
    firstname:Yup.string().required('First Name is required'),
    lastname:Yup.string().required('Last Name is required'),
    state:Yup.string().required('State is required'),
    city:Yup.string().required('City is required')
  }),
  handleSubmit(values,{resetForm,setSubmitting,setErrors}) {
    setTimeout(()=>{if(values.firstname==='manish'){
      setErrors({firstname:'this name is taken'})
    }else{
        resetForm()}
      setSubmitting(false)
    },2000)
    console.log(values)
  }
})(App)



ReactDOM.render(<ReactApp />, document.getElementById('root'));
