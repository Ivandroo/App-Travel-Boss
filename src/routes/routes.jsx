import React from "react";

import App from "../App";
import Home from "../pages";
import Sobre from "../pages/sobre"
import Destinos from "../pages/destinos";
import Contactos from "../pages/contactos";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sobre",
        element: <Sobre />
      },
      {
        path: "destinos",
        element: <Destinos />
      },
      {
        path: "contactos",
        element: <Contactos />
      },
    ],
  },
]);