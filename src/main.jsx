import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import LoginPage from "./components/LoginPage"
import Authorities from './components/Authorities'
import SignUp from './components/signup'
import ForgotPassword from './components/ForgotPassword'
import PageLayout from './PageLayout'
import PageLayout2 from './PageLayout2'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },
      {
        path: "Authorities",
        element: <Authorities />,
      },
      {
        path: "SignUp",
        element: <SignUp />,
      },
      {
        path: "ForgotPassword",
        element: <ForgotPassword />,
      }
    ]
  },
  {
    path: "/Authorities",
    element: <PageLayout2 />,
    children: [
      {
        path: "",
        element: <Authorities />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
