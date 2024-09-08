import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Donate from './Pages/Donate'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Donate",
    element: <Donate/>,
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
