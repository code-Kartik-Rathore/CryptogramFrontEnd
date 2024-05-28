import "./App.css";
import Sign from "./SIGNUP/Sign";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./LOGIN/Login";
import Main from "./mainPage/Main2";
import Main2 from "./mainPage/Main2";
// import React, { useState } from "react";

function App() {
 
  const route = createBrowserRouter([
   
    {
      path: "/",
      element: <Sign />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
     
    </div>
  );
}

export default App;

