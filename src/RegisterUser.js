// import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  //   const [data, setData] = useState([]);

  const signUpSchema = Yup.object({
    name: Yup.string()
      .min(4)
      .max(10)
      .required(" please enter your title min 10 character"),

    last: Yup.string()
      .min(4)
      .max(10)
      .required(" please enter your title min 8 character"),
    description: Yup.string()
      .min(4)
      .max(15)
      .required(" please enter your description min 15 character"),
  });
  const initialValues = {
    name: "",
    last: "",
    description: "",
    img: "",
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

  //   const uploadSingleFile = (e) => {
  //     setData({
  //       file: URL.createObjectURL(e.target.files[0]),
  //     });
  //   };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Register User</h1>
      <form onSubmit={handleSubmit} style={{ marginLeft: "8%" }}>
        <div style={{ marginTop: "-6%" }}>
          <div>
            <input
              style={{ width: "41%", marginLeft: "26%", marginTop: "11%" }}
              type="text"
              className="form-control"
              name="name"
              placeholder="First name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p style={{ color: "red", marginLeft: "31%" }} className="">
                {errors.name}
              </p>
            ) : null}
            <br />
          </div>

          <div className="col">
            <input
              style={{ width: "41%", marginLeft: "26%" }}
              type="text"
              className="form-control"
              name="last"
              placeholder="Last name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.last && touched.last ? (
              <p style={{ color: "red", marginLeft: "31%" }} className="">
                {errors.last}
              </p>
            ) : null}
          </div>
          <br />
          <div className="col">
            <input
              style={{ width: "41%", marginLeft: "26%" }}
              type="text"
              className="form-control"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.description && touched.description ? (
              <p style={{ color: "red", marginLeft: "31%" }} className="">
                {errors.description}{" "}
              </p>
            ) : null}
          </div>
          <br />
          <div className="col">
            <input
              style={{ width: "41%", marginLeft: "26%" }}
              type="file"
              name="img"
              className="form-control"
              //   onChange={uploadSingleFile}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <br />
          <div className="col">
            <input
              style={{ width: "41%", marginLeft: "26%" }}
              type="submit"
              className="btn btn-primary"
            />
          </div>
          <Link to="/">
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default RegisterUser;
