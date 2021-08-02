
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import "./Account.css"

const Account = () => {

  const initialValues = {
    fistName: '',
    lastName: '',
    email: '',
    address: '',
    phone: ''
  }

  const onSubmit = values => {
    console.log(values)
  }

  const validationSchema = Yup.object({
    fistName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalied email format').required('Required'),
    address: Yup.string().required('Resquired'),
    phone: Yup.string().required('Resquired')
  })

  return (
    <div className="Account">
      <Formik  initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="acc_form">
          <div className="acc_formPart">
            <label htmlFor="fistName">First Name</label>
            <Field type="text" id="fistName" name="fistName" placeholder="First Name"/>
            <ErrorMessage name="fistName"/>
          </div>
          
          <div className="acc_formPart">
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" placeholder="Last Name"/>
            <ErrorMessage name="lastName"/>
          </div>
          
          <div className="acc_formPart">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" placeholder="Email"/>
          <ErrorMessage name="email"/>
          </div>

          <div className="acc_formPart">
          <label htmlFor="address">Address</label>
          <Field type="text" id="address" name="address" placeholder="Address"/>
          <ErrorMessage name="address"/>
          </div>
          <div className="acc_formPart">
            <label htmlFor="phone">Phone</label>
            <Field type="text"  id="phone" name="phone" placeholder="Number"/>
            <ErrorMessage name="phone"/>

          </div>


          
          <button className="acc__btn" type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Account
