import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import LoginPage from "./LoginComponents/LoginPage"
import Authorities from './AuthorityComponent/Authorities'
import SignUp from './LoginComponents/SignUp'
import ForgotPassword from './LoginComponents/ForgotPassword'
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
