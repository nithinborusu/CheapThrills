
import React from "react";

import { Formik,Form,Field,ErrorMessage } from "formik";

import * as Yup from 'yup';


import { useNavigate } from "react-router-dom";


const Login= () =>{
    const navigate =useNavigate();
    const initialValues={
        email:'',
        password:'',
    }

    const validationSchema = Yup.object({
       email: Yup.string().email('Invalid email format').required('Required'),
       password: Yup.string().required('Required'),
    });


    const onSubmit =(values,{setSubmitting})=>{
        setTimeout(()=>{
            console.log('Logging in',values);
            setSubmitting(false);
            navigate('/home');

        },500)
    }
   
    return(
        <div className="login-container">
            <h2>Login</h2>
            <Formik
             initialValues={initialValues}
             validationSchema={validationSchema}
             onSubmit={onSubmit}
            >

            {formik =>(
            <Form>
                <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email"/>
                <ErrorMessage name="email" component="div" className="error"/>
                </div>

                <div className="form-control">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password"/>
                <ErrorMessage name="password" component="div" className="error"/>
                </div>

                <button type="submit" disabled={formik.isSubmitting}>Login</button>
            </Form>
              

            )}

            </Formik>
        </div>
    );
};

export default Login;