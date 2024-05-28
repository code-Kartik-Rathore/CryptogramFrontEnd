// import React from "react";
// import "./login.css";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="addUser">
//       <h3>Sign in</h3>
//       <form className="addUserForm">
//         <div className="inputGroup">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             autoComplete="off"
//             placeholder="Enter your Email"
//           />
//           <label htmlFor="Password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             autoComplete="off"
//             placeholder="Enter your Password"
//           />
//           <button type="submit" class="btn btn-primary">
//             Login
//           </button>
//         </div>
//       </form>
//       <div className="login">
//         <p>Don't have Account? </p>
//         <Link to="/" type="submit" class="btn btn-success">
//           Sign Up
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./login.css";
import logo from "./Group-16352-1.png"

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Store user information in local storage
//     const userData = [username, email, password];
//     localStorage.setItem('user', JSON.stringify(userData));
//     console.log("Submitted:", userData);
//   };
 const Login = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
  }

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={logo} className="img-fluid" alt="Sample" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  id="form3Example3 username"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label className="form-label" htmlFor="form3Example3">
                  Username
                </label>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3 email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              <div data-mdb-input-init className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4 password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                {/* <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Sign up</a></p> */}
                {/* <button
                  className="link-btn"
                  onClick={() => props.onFormSwitch("register")}
                >
                  Don't have an account? Register here.
                </button> */}
                {/* <Link to="/" type="submit" class="link-btn">
                  // Sign Up //{" "}
                </Link> */}
              </div>
            </form>
            <div className="link-btn">
              <p>Don't have an account </p>
              <Link to="/" type="submit" class="link-btn">
                 Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">All rights reserved.</div>
      </div>
    </section>
  );
};

export default Login;
