
import Sign from "./SIGNUP/Sign";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./LOGIN/Login";
import PortfolioPage from "./Components/PortfolioPage";

// import React, { useState } from "react";

function App() {
  //   const [currentForm, setCurrentForm] = useState('Login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }
  const route = createBrowserRouter([
   
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/sign",
      element: <Sign />,
    },
    {
      path:"/PortFolioPage",
      element: <PortfolioPage/>,

    },
  ]);

  return (
    <div className="App">
      
      <RouterProvider router={route}></RouterProvider>
      {/* currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> :{" "}
      <Sign onFormSwitch={toggleForm} /> */}
    </div>
  );
}

export default App;

// // import logo from './logo.svg';
// import './App.css';
// // import { Login } from "./myComponents/Login";
// import LoginForm  from "./myComponents/LoginForm";
// import { Register } from "./myComponents/signin";

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <div className="App">
//       {
//         currentForm === "login" ? <LoginForm onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
//       }
//     </div>
//   );
// }

// export default App;
