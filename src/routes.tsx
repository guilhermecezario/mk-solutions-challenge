import React from "react";

import {
  createBrowserRouter,
} from "react-router-dom";

import TemplateRegister from './templates/Register'

import User from "./pages/Register/User";
import Validation from "./pages/Register/Validation";
import Company from "./pages/Register/Company";
import Documents from "./pages/Register/Documents";
import Confirmation from "./pages/Register/Confirmation";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <TemplateRegister />,
    children: [
      {
        path: "user",
        element: <User />,
      },
      {
        path: "validation",
        element: <Validation />,
      },
      {
        path: "company",
        element: <Company />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
      {
        path: "confirmation",
        element: <Confirmation />,
      },
    ],
  },
]);
