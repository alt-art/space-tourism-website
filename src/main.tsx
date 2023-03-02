import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.scss";
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from "./pages/Home";
import data from './utils/data.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "destination",
        element: <Navigate to="/destination/moon" />,
      },
      {
        path: "destination/:planet",
        element: <Destination />,
        loader: ({params}) => {
          const planet = data.destinations.find((planet) => planet.name.toLocaleLowerCase() === params.planet);
          if (!planet) {
            throw new Error("Planet not found");
          }
          return planet;
        },
        errorElement: <div>Not found</div>,
      },
      {
        path: "crew",
        element: <Crew />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
