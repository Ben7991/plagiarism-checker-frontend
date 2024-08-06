import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "./components/templates/AuthLayout/AuthLayout";
import DashboardLayout from "./components/templates/DashboardLayout/DashboardLayout";

// auth pages
import Login from "./pages/auth/Login/Login";
import ForgotPassword from "./pages/auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword/ResetPassword";

// dashboard pages
import Overview from "./pages/dashboard/Overview/Overview";
import Archive from "./pages/dashboard/Archive/Archive";
import AcademicDivision from "./pages/dashboard/AcademicDivision/AcademicDivision";
import AccountSettings from "./pages/dashboard/AccountSettings/AccountSettings";
import ManageUsers from "./pages/dashboard/ManageUsers/ManageUsers";

export default function App() {
  const appRouter = createBrowserRouter([
    { 
      path: "/", 
      element: <AuthLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "reset-password", element: <ResetPassword /> },
      ] 
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Overview /> },
        { path: "archive", element: <Archive /> },
        { path: "academic-division", element: <AcademicDivision /> },
        { path: "account-settings", element: <AccountSettings /> },
        { path: "manage-users", element: <ManageUsers /> },
      ]
    }
  ]);

  return <RouterProvider router={appRouter}/>
}
