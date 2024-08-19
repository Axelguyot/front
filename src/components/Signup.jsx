import React from 'react'
import { Field, Form, Formik } from 'formik';
import axios from 'axios';

export const Signup = () => {
  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const handleRegister = async( values) => {
    console.log('valores', values)
      try {
          const response = await axios.post('http://localhost:5000/auth/register', values)
          console.log(response.data) 
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 full-screen-background full-screen-background" >
      <div className='card'>
        <div className="news_section layout_padding">
          <div className="container">
            <div className="d-flex justify-content-center">
              <h1 className="text-dark services_text custom_main" style={{fontFamily: 'JetBrains Mono', fontSize:'25px'}}>Sign up to continue</h1>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            
          <Formik 
          initialValues={initialValues}
          onSubmit={handleRegister}
          >

          <Form>
            <div className="form-floating mb-3">
              <Field 
                  type="text" 
                  className="form-control" 
                  id="floatingInput" 
                  placeholder="Name"
                  name='name'
              />
              <label htmlFor="floatingInput">Name</label>
          </div>
        <div className="form-floating mb-3">
            <Field 
                type="email" 
                className="form-control" 
                id="floatingInput" 
                placeholder="name@example.com"
                name='email'
            />
            <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <Field 
            type="password" 
            className="form-control" 
            id="floatingPassword" 
            placeholder="Password" 
            name='password'
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleRegister} >Sign up</button>
          </Form>
       </Formik>
            
          </div>
        </div>
      </div>
    </div>
  );
};

