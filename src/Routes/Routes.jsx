import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//-----ADMIN-MODULE---START------------------------------------------
import AdminLayout from "../admin/AdminLayout"
import AdminLogin from "../admin/AdminLogin.jsx"
import AdminRegister from "../admin/AdminRegister.jsx"
import Reject from "../admin/Accept/Reject.jsx";
import Profile from "../admin/manageprofile/Profile.jsx";
import AcceptTeacher from "../admin/Accept/AcceptTeacher.jsx";
import AcceptDoctor from "../admin/Accept/AcceptDoctor.jsx";
import AcceptChildren from "../admin/Accept/AcceptChildren.jsx";
import AcceptParents from "../admin/Accept/AcceptParents.jsx";

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
          element:<Reject/>,
          children:[
            {
              path:"acceptteacher",
              element:<AcceptTeacher/>
            },
            {
              path:"acceptchildren",
              element:<AcceptChildren/>
            },
            {
              path:"acceptdoctor",
              element:<AcceptDoctor/>
            },
            {
              path:"acceptparents",
              element:<AcceptParents/>
            }
          ]
        },
        {
          path:"profile",
          element:<Profile/>
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
