import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//-----ADMIN-MODULE---START------------------------------------------
import AdminLayout from "../admin/AdminLayout"
import AdminLogin from "../admin/AdminLogin.jsx"
import AdminRegister from "../admin/AdminRegister.jsx"
import Reject from "../admin/Accept/Reject.jsx";
import Profile from "../admin/manageprofile/Profile.jsx";
import ManageTeacherProfile from "../admin/manageprofile/ManageTeacherProfile.jsx";
import ManageChildrenProfile from "../admin/manageprofile/ManageChildrenProfile.jsx";
import ManageDoctorsProfile from "../admin/manageprofile/ManageDoctorsProfile.jsx";
import ManageParentsProfile from "../admin/manageprofile/ManageParentsProfile.jsx";

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
        },
        {
          path:"profile",
          element:<Profile/>,
          children:[
            {
              path:"manage-teacher-profile",
              element: <ManageTeacherProfile/>
            },
            {
              path:"manage-children-profile",
              element: <ManageChildrenProfile/>
            },
            {
              path:"manage-doctors-profile",
              element: <ManageDoctorsProfile/>
            },
            {
              path:"manage-parents-profile",
              element: <ManageParentsProfile/>
            }
          ]
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
