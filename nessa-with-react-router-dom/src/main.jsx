import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './error-page';
import Donate from './pages/Donate';
import Title from './components/Title';
import AboutUs from './pages/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Donate",
    element: <Donate />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title />
    <RouterProvider router={router} />
  </StrictMode>,
)
