import React, { useState } from "react";
import "./FormValidation.css";
import image from "./white-background.jpg";
import { useFormik } from "formik";
import { signUpSchema } from "./Schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  message: "",
};

const FormValidation = () => {
  const [allFormData, setAllFormData] = useState([]);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      setAllFormData([...allFormData, { values }]);
      console.log("All Registered data", allFormData);
      action.resetForm();
    },
  });
  // console.log(errors);

  return (
    <div className="form-validation">
      <div className="container">
        <form action="submit" onSubmit={handleSubmit} className="form-body">
          <div className="form-box">
            <h1>Form Validation</h1>
            <div className="input-box">
              <label htmlFor="full_name">Name</label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                id="name"
                placeholder="Enter your full name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="form-error">{errors.name}</p>
              ) : null}
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                id="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                autoComplete="off"
                id="password"
                placeholder="Enter your password!"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>
            <div className="input-box">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                autoComplete="off"
                id="confirmPassword"
                placeholder="Enter your confirm password!"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p className="form-error">{errors.confirm_password}</p>
              ) : null}
            </div>
            <div className="input-box">
              <label htmlFor="text_area">Message</label>
              <textarea
                type="text"
                name="message"
                id="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button>Register</button>
          </div>
        </form>
        <div className="img-box">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="usersBox">
        {allFormData &&
          allFormData.map((user, index) => {
            return (
              <div className="users" key={index}>
                <div>
                  <p></p>
                </div>
                <div className="user-data">
                  <strong>Name:</strong>
                  <p>{user.values.name}</p>
                </div>
                <div className="user-data">
                  <strong>Email:</strong>
                  <p>{user.values.email}</p>
                </div>
                <div className="user-data">
                  <strong>Password:</strong>
                  <p>{user.values.password}</p>
                </div>
                <div className="user-data">
                  <strong>Message:</strong>
                  <p>{user.values.message}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FormValidation;
