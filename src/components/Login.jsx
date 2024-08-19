import React from 'react';
import { Field, Form, Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export const Login = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 full-screen-background full-screen-background">
      <div className='card'>
        <div className="news_section layout_padding">
          <div className="container">
            <div className="d-flex justify-content-center">
              <h1 className="text-dark services_text custom_main" style={{fontFamily: 'JetBrains Mono', fontSize:'25px'}}>Log in to continue</h1>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            <Formik 
            initialValues={initialValues}
            >
              <Form>
                <div className="form-floating mb-3">
                  <Field 
                    type="email" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="name@example.com"
                    name='email'
                  />
                  <label htmlFor="floatingInput">Enter your email</label>
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
                <button className="btn btn-primary w-100 py-2" type="submit">Log in</button>
              </Form>
            </Formik>

            <Link to="/signup">
              <Button variant="link">Create an account</Button>
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};