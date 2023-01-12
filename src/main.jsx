import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from "./routes/root"
import ErrorPage from './error-page';
import Top100 from './routes/Top100';
import Favorites from './routes/Favorites';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Top100",
    element: <Top100 />
  },
  {
    path: "/Favorites",
    element: <Favorites />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
