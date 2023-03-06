import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {

    
  const signUpSchema = Yup.object({
    email: Yup.string()
      .min(4)
      .max(15)
      .required(" please enter your title min 10 character"),

      password: Yup.string()
      .min(4)
      .max(10)
      .required(" please enter your title min 8 character"),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const diffToast = () =>
    toast.success("Submit Successfull", { position: "top-center" });

  const { errors, touched, handleBlur, handleChange, handleSubmit } = useFormik(
    {
      initialValues: initialValues,

      validationSchema: signUpSchema,
      onSubmit: (val) => {
        console.log(val);
        diffToast();
      },
    }
  );
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <form  onSubmit={handleSubmit}>
        <div>
          <div className="col">
            <input
              style={{ width: "41%", marginLeft: "33%", marginTop: "4%" }}
              type="email"
              name="email"
              className="form-control"
              placeholder="user name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
              {errors.email && touched.email ? (
              <p style={{ color: "red", marginLeft: "31%" }} className="">
                {errors.email}
              </p>
            ) : null}
          </div>

          <br />
          <div className="col">
            <input
              style={{ width: "41%", marginLeft: "33%" }}
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
              {errors.password && touched.password ? (
              <p style={{ color: "red", marginLeft: "31%" }} className="">
                {errors.password}
              </p>
            ) : null}
          </div>
          <br/>
          <div>
            {/* <Link to="/dashboard">
            <button style={{marginLeft:"47%"}} className="btn btn-primary">Login</button>
            </Link> */}
            <input     style={{ width: "20%", marginLeft: "44%" }}
              type="submit"
              className="btn btn-primary"/>
          </div>
        </div>
      </form>
      <Link to="/">
            <button  className="btn btn-primary">Back</button>
            </Link>
            <ToastContainer/>
    </div>
  );
};

export default Login;
