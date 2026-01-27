



import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const HandleSighup = async (values) => {
    try {
      const SighupData = {
        username: values.username, 
        email: values.email,
        password: values.password,
        password_confirmation: values.confirmPassword,
      };

      const res = await axios.post(
        "https://bookstore.eraasoft.pro/api/register",
        SighupData
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    agree: Yup.boolean().oneOf([true], "You must agree to continue"),
  });

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className=" w-[35em]">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            agree: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={HandleSighup}
        >
          {({ isSubmitting }) => (
            <Form className=" p-8">
              {/* First / Last */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-semibold text-black/80"
                  >
                    First Name
                  </label>
                  <Field
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    className="w-full rounded-lg border border-black/10 px-4 py-3 outline-none focus:border-black/20"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-semibold text-black/80"
                  >
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    id="lastName"
                    placeholder="lastName"
                    className="w-full rounded-lg border border-black/10 px-4 py-3 outline-none focus:border-black/20"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Username */}
              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="username"
                  className="text-sm font-semibold text-black/80"
                >
                  Username
                </label>
                <Field
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  className="w-full rounded-lg border border-black/10 px-4 py-3 outline-none focus:border-black/20"
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Email */}
              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-black/80"
                >
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-lg border border-black/10 px-4 py-3 outline-none focus:border-black/20"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Password */}
              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-black/80"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  className="w-full rounded-lg border border-black/10 px-4 py-3 outline-none focus:border-black/20"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Confirm Password */}
              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-semibold text-black/80"
                >
                  Confirm password
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  placeholder="Enter password"
                  className="w-full rounded-lg border border-black/10 px-4 py-3 outline-none focus:border-black/20"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Agree */}
              <div className="mt-5 flex items-center gap-2">
                <Field
                  type="checkbox"
                  name="agree"
                  id="agree"
                  className="h-4 w-4 accent-pink-600"
                />
                <label htmlFor="agree" className="text-sm text-black/70">
                  Agree with{" "}
                  <span className="text-pink-600 font-semibold">
                    Terms & Conditions
                  </span>
                </label>
              </div>
              <ErrorMessage
                name="agree"
                component="p"
                className="text-red-500 text-sm mt-2"
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-6 w-full rounded-lg py-3 font-semibold text-white
                  bg-pink-600 hover:bg-pink-700
                  disabled:opacity-60
                "
              >
                Sign Up
              </button>

              {/* Login */}
              <p className="mt-6 text-center text-sm text-black/70">
                Already have an account?{" "}
                <span className="text-pink-600 font-semibold cursor-pointer">
                  <Link to="/login">Login</Link>
                </span>
              </p>

              {/* Or */}
              <div className="my-6 flex items-center justify-center">
                <span className="text-xs text-black/40">or</span>
              </div>

              {/* Social Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="
                    w-full rounded-lg bg-white py-3
                    shadow-md border border-black/5
                    flex items-center justify-center gap-3
                  "
                >
                  <FcGoogle size={22} />
                  <span className="text-sm text-black/70">
                    Sign up with Google
                  </span>
                </button>

                <button
                  type="button"
                  className="
                    w-full rounded-lg bg-white py-3
                    shadow-md border border-black/5
                    flex items-center justify-center gap-3
                  "
                >
                  <span className="h-6 w-6 rounded-full bg-[#1877F2] flex items-center justify-center">
                    <FaFacebookF className="text-white text-sm" />
                  </span>
                  <span className="text-sm text-black/70">
                    Sign up with Facebook
                  </span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
