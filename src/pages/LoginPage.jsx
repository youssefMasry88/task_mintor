// import axios from "axios";
// import { Field, Form, Formik, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
// import { MdFacebook } from "react-icons/md";

// export default function LoginPage() {
//   const loginSchema = Yup.object({
//     identifier: Yup.string()
//       .required("You must fill this field!")
//       .email("Please enter a valid email!"),
//     password: Yup.string().required("You must fill this field!"),
//   });

//   const handleLogin = async (values) => {
//     try {
//       const LoginData = {
//         email: values.email,
//         password: values.password,
//       };
//       const res = await axios.post(
//         "https://bookstore.eraasoft.pro/api/login",
//         LoginData,
//       );
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen  flex  justify-center items-center">
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validationSchema={loginSchema}
//         onSubmit={handleLogin}
//       >
//         {({ isSubmitting }) => (
//           <Form className="p-8 flex flex-col gap-2 bg-white text-black w-[35em] ">
//             <h2 className="text-md text-center capitalize font-bold  text-[#D9176C]">
//               login form
//             </h2>

//             <label htmlFor="email" className="mt-[3em]">
//               Email
//             </label>
//             <Field
//               name="identifier"
//               type="text"
//               id="email"
//               placeholder="example@gmail.com"
//               className="border border-[#22222233] rounded-lg p-4 placeholder:text-[#22222280] "
//             />
//             <ErrorMessage
//               name="identifier"
//               component="p"
//               className="text-red-500 py-2 font-semibold"
//             />

//             <label htmlFor="password" className="mt-[1.5em]">
//               Password
//             </label>
//             <Field
//               name="password"
//               type="password"
//               id="password"
//               placeholder="Enter password"
//               className="border border-[#22222233] rounded-lg p-4  placeholder:text-[#22222280]"
//             />
//             <ErrorMessage
//               name="password"
//               component="p"
//               className="text-red-500 py-2 font-semibold"
//             />
//             <div className="flex items-center justify-between">
//               <div>
//                 <Field
//                   type="checkbox"
//                   name="rememberMe"
//                   id="rememberMe"
//                   className="mr-2"
//                 />
//                 <label htmlFor="rememberMe">Remember me</label>
//               </div>
//               <Link to="/register" className="text-[#D9176C]">
//                 Forget password?
//               </Link>
//             </div>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="bg-[#D9176C] shadow-xl text-white rounded-lg p-3 mt-[2em] disabled:opacity-60 "
//             >
//               {isSubmitting ? "Loading..." : "Login"}
//             </button>

//             <p className="text-sm text-center mt-2 ">
//               Don’t have an account?
//               <Link to="/register" className="text-[#D9176C] font-bold ml-1">
//                 Sign up
//               </Link>
//             </p>
//             <span className="text-sm text-center my-[2em] ">OR</span>

//             <div className="flex flex-col items-center justify-center gap-3 ">
//               <button
//                 className="
//     relative w-full
//     bg-white shadow-xl text-black
//     rounded-lg px-6 py-3
//     disabled:opacity-60
//   "
//               >
//                 <FcGoogle
//                   size={25}
//                   className="absolute left-38 top-1/2 -translate-y-1/2"
//                 />
//                 <span className="flex justify-center">Login with Google</span>
//               </button>
//               <button
//                 className="
//     relative w-full
//     bg-white shadow-xl text-black
//     rounded-lg px-6 py-3
//     disabled:opacity-60
//   "
//               >
//                 <MdFacebook
//                   size={25}
//                   color="#1877F2"
//                   className="absolute left-37 top-1/2 -translate-y-1/2"
//                 />
//                 <span className="flex justify-center">Login with Facebook</span>
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }



import axios from "axios";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function LoginPage() {
  const loginSchema = Yup.object({
    email: Yup.string()
      .required("You must fill this field!")
      .email("Please enter a valid email!"),
    password: Yup.string().required("You must fill this field!"),
    rememberMe: Yup.boolean(),
  });

  const handleLogin = async (values) => {
    try {
      const loginData = {
        email: values.email,
        password: values.password,
      };

      const res = await axios.post(
        "https://bookstore.eraasoft.pro/api/login",
        loginData
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form className="w-[35em] p-8  flex flex-col gap-2">
            <h2 className="text-sm text-center uppercase font-bold text-[#D9176C]">
              Login
            </h2>

            {/* Email */}
            <label htmlFor="email" className="mt-8 text-sm font-semibold text-black/80">
              Email
            </label>
            <Field
              name="email"
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-black/20 placeholder:text-black/40"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />

            {/* Password */}
            <label htmlFor="password" className="mt-5 text-sm font-semibold text-black/80">
              Password
            </label>
            <Field
              name="password"
              type="password"
              id="password"
              placeholder="Enter password"
              className="border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-black/20 placeholder:text-black/40"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />

            {/* Remember / Forgot */}
            <div className="mt-3 flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-black/70">
                <Field type="checkbox" name="rememberMe" className="h-4 w-4 accent-[#D9176C]" />
                Remember me
              </label>

              <Link to="/forgot-password" className="text-[#D9176C] font-semibold">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 bg-[#D9176C] hover:bg-[#c41560] shadow-md text-white rounded-lg py-3 font-semibold disabled:opacity-60"
            >
              {isSubmitting ? "Loading..." : "Login"}
            </button>

            {/* Signup */}
            <p className="text-sm text-center mt-3 text-black/70">
              Don’t have an account?
              <Link to="/register" className="text-[#D9176C] font-bold ml-1">
                Sign up
              </Link>
            </p>

            {/* OR */}
            <div className="my-6 flex items-center justify-center">
              <span className="text-xs text-black/40">OR</span>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="w-full rounded-lg bg-white py-3 shadow-md border border-black/5 flex items-center justify-center gap-3"
              >
                <FcGoogle size={22} />
                <span className="text-sm text-black/70">Login with Google</span>
              </button>

              <button
                type="button"
                className="w-full rounded-lg bg-white py-3 shadow-md border border-black/5 flex items-center justify-center gap-3"
              >
                <span className="h-6 w-6 rounded-full bg-[#1877F2] flex items-center justify-center">
                  <FaFacebookF className="text-white text-sm" />
                </span>
                <span className="text-sm text-black/70">Login with Facebook</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
