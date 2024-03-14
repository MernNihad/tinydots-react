import React, { Children } from "react";
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
import AcceptTeacher from "../admin/Accept/AcceptTeacher.jsx";
import AcceptChildren from "../admin/Accept/AcceptChildren.jsx";
import AcceptDoctor from "../admin/Accept/AcceptDoctor.jsx";
import AcceptParents from "../admin/Accept/AcceptParents.jsx";
import TeacherLogin from "../teacher/TeacherLogin.jsx";
import TeacherRegister from "../teacher/TeacherRegister.jsx";
import TeacherLayout from "../teacher/TeacherLayout.jsx";
import TeacherProfile from "../teacher/profile/TeacherProfile.jsx";
import TeacherManageActivity from "../teacher/TeacherManageActivity.jsx";
import TeachChildren from "../teacher/children/TeachChildren.jsx";
import FeedBack from "../teacher/FeedBack.jsx";
import TeachAttendenceForm from "../teacher/TeachAttendenceForm.jsx";
import TeachSalary from "../teacher/TeachSalary.jsx";
import TeachHealthRecords from "../teacher/TeachHealthRecords.jsx";

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
      path: "/",
      element: <div>user</div>,
    },
    {
      path: "/teacher-login",
      element: <TeacherLogin/>
    },
    {
      path: "/teacher-register",
      element: <TeacherRegister/>
    },

    // teacher.....................................start......

    {
      path: "/teacher",
      element: <TeacherLayout/>,
      children:[
        {
          path:"dashboard",
          element:<h1>dashboard</h1>
        },
        {
          path:"teacherProfile",
          element:<TeacherProfile/>
        },
        {
          path:"children",
          element:< TeachChildren/>
        },
        {
          path:"manageactivity",
          element:<TeacherManageActivity/>
        },
        {
          path:"attendenceform",
          element:<TeachAttendenceForm/>
        },
        {
          path:"feedback",
          element:<FeedBack/>
        },
        {
          path:"salary",
          element:<TeachSalary/>
        },
        {
          path:"healthrecords",
          element:<TeachHealthRecords/>
        }
         
       
      ]
    },





  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
