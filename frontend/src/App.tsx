import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Countries from "./pages/CountriesPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/countries",
    element: <Countries />,
  },
]);

function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
