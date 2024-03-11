import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//-----ADMIN-MODULE---START------------------------------------------
import AdminLayout from "../admin/AdminLayout"
import AdminLogin from "../admin/AdminLogin.jsx"
import AdminRegister from "../admin/AdminRegister.jsx"
import Reject from "../admin/Accept/Reject.jsx";

//-----ADMIN-MODULE---END------------------------------------------

function Routes() {
  const router = createBrowserRouter([

    // admin --------------------------------
    {
      path: "/admin",
      element: <AdminLayout/>,
      children:[
        {
          path:"dashboard",
          element:<h1>dashboard</h1>
        },
        {
          path:"accept",
          element:<Reject/>
        }
      ]
    },
    {
      path: "/admin-login",
      element: <AdminLogin/>,
    },
    {
      path: "/admin-register",
      element: <AdminRegister/>,
    },
    // ----------------------------------------
    {
      path: "/teacher",
      element: <div>teacher</div>,
    },
    {
      path: "/",
      element: <div>user</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
