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
import OpenCases from './AuthorityComponent/CasesTable/OpenCases'
import ResolvedCases from './AuthorityComponent/CasesTable/ResolvedCases'
import OngoingCases from './AuthorityComponent/CasesTable/OngoingCases'
import ClosedCases from './AuthorityComponent/CasesTable/ClosedCases'
import HelpCenter from './AuthorityComponent/HelpCenter'
import Evidence from './AuthorityComponent/CasesTable/Evidence'
import Details from './AuthorityComponent/CasesTable/Details'
import OfficerDetails from './AuthorityComponent/CasesTable/OfficerDetails'
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
      },
      {
        path: "OpenCases",
        element: <OpenCases />,
      },
      {
        path: "ResolvedCases",
        element: <ResolvedCases />,
      },
      {
        path: "OngoingCases",
        element: <OngoingCases />,
      },
      {
        path: "ClosedCases",
        element: <ClosedCases />,
      },
      {
        path: "HelpCenter",
        element: <HelpCenter />,
      },
      {
        path: "Evidence/:caseNumber",
        element: <Evidence />,
      },
      {
        path: "Details/:caseNumber",
        element: <Details />,
      },
      {
        path: "OfficerDetails",
        element: <OfficerDetails />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
