import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import  ReactDOM  from "react-dom/client";
import React from "react";
import InputPage from "./InputPage";
import WeatherInfo from "./WeatherInfo";


export default function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <InputPage />,
      },
      {
        path: "/weather",
        element: <WeatherInfo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
