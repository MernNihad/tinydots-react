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
import ManageTeacherProfile from "../admin/manageprofile/ManageTeacherProfile.jsx";
import ManageChildrenProfile from "../admin/manageprofile/ManageChildrenProfile.jsx";
import ManageDoctorsProfile from "../admin/manageprofile/ManageDoctorsProfile.jsx";
import ManageParentsProfile from "../admin/manageprofile/ManageParentsProfile.jsx";
import Attendence from "../admin/attendence/Attendence.jsx";
import TeacherAttendence from "../admin/attendence/TeacherAttendence.jsx";
import ChildrenAttendence from "../admin/attendence/ChildrenAttendence.jsx";
import Health from "../admin/healthrecords/Health.jsx";
import ChildrenRecords from "../admin/healthrecords/ChildrenRecords.jsx";
import Salary from "../admin/salary/Salary.jsx";
import TeacherSalary from "../admin/salary/TeacherSalary.jsx";
import DoctorSalary from "../admin/salary/DoctorSalary.jsx";
import Communication from "../admin/communication/Communication.jsx";
import TeacherCommunication from "../admin/communication/TeacherCommunication.jsx";
import DoctorCommunication from "../admin/communication/DoctorCommunication.jsx";
import ParentsCommunication from "../admin/communication/ParentCommunication.jsx";

import TeacherAdminMessage from "../admin/communication/message/TeacherCommunication.jsx"



// teacher
import TeacherLayout from "../teacher/TeacherLayout.jsx";
// import TeacherProfile from "../teacher/profile/TeacherProfile.jsx";
import TeacherManageActivity from "../teacher/TeacherManageActivity.jsx";
import TeachChildren from "../teacher/children/TeachChildren.jsx";
import FeedBack from "../teacher/FeedBack.jsx";
import TeachAttendenceForm from "../teacher/TeachAttendenceForm.jsx";
import TeachSalary from "../teacher/TeachSalary.jsx";
import TeachHealthRecords from "../teacher/TeachHealthRecords.jsx";
import Activity from "../admin/manageactivity/Activity.jsx";
import ManageChildrenActivity from "../admin/manageactivity/ManageChildrenActivity.jsx";
import TeacherFeedback from "../admin/feedback/TeacherFeedback.jsx";
import DoctorsFeedback from "../admin/feedback/DoctorsFeedback.jsx";
import ParentsFeedback from "../admin/feedback/ParentsFeedback.jsx";
import AdminFeedback from "../admin/feedback/AdminFeedback.jsx";
import DoctorLayout from "../doctor/DoctorLayout.jsx";
import DoctorLogin from "../doctor/DoctorLogin.jsx";
import DoctorRegister from "../doctor/DoctorRegister.jsx";
import DoctorsProfile from "../doctor/profile/DoctorProfile.jsx";
import DoctorConsultation from "../doctor/consultation/DoctorConsultation.jsx";
import Doctorhealthrecords from "../doctor/healthrecords/Doctorhealthrecords.jsx";
import Doctorcommunication from "../doctor/communication/Doctorcommunication.jsx";
import Doctorchildren from "../doctor/children/Doctorchildren.jsx";
import Doctorsalary from "../doctor/salary/Doctorsalary.jsx";
import Doctorfeedback from "../doctor/feedback/Doctorfeedback.jsx";

import ViewTeacherAttendance from "../teacher/ViewTeacherAttendance.jsx"

import TeacherRegister from "../teacher/TeacherRegister.jsx";
import TeacherLogin from "../teacher/TeacherLogin.jsx"
import ChildrensAttendance from "../teacher/children/ChildrensAttendance.jsx";
//-----ADMIN-MODULE---END------------------------------------------

import UserLayout from "../user/UserLayout.jsx";
import UserLogin from "../user/UserLogin.jsx";
import UserRegister from "../user/UserRegister.jsx"
import UserActivity from "../user/UserActivity.jsx"
import UserCalender from "../user/UserCalender.jsx"
import UserChildren from "../user/UserChildren.jsx"
import UserCommunication from "../user/UserCommunication.jsx"
import UserFeedback from "../user/UserFeedback.jsx";
import UserHealthRecords from "../user/UserHealthRecords.jsx"
import UserProfile from "../user/UserProfile.jsx"
import EditTeacher from "../admin/manageprofile/forms/editTeacher";
import EditChildrenProfile from "../admin/manageprofile/forms/EditChildren.jsx";
import EditDoctor from "../admin/manageprofile/forms/EditDoctor";

import ParentLogin from "../user/UserLogin.jsx"
import ParentRegister from "../user/UserRegister.jsx";
import EditParent from "../admin/manageprofile/forms/EditParent.jsx";
import AddChildren from "../user/AddChildren.jsx";


import ParentAdminMessage from "../admin/communication/message/ParentCommunication.jsx"

// teacher
import TeacherProfile from "../teacher/TeacherProfile.jsx"
import TeacherEditProfile from "../teacher/TeacherEditProfile.jsx"
import TeachChildrenDetailedView from "../teacher/TeachChildrenDetailedView.jsx"
import TeachChildrenActivity from "../teacher/TeachChildrenActivity.jsx"

import TeachChildrenViewActivity from "../teacher/TeachChildrenViewActivity.jsx"

import TeachChildrenAttendance  from "../teacher/TeachChildrenAttendance.jsx"

import UserHome from "../user/UserHome.jsx"
import AdminProfile from "../admin/Profile/Profile.jsx"

import AdminEditProfile from "../admin/Profile/AdminEditProfile.jsx"
function Routes() {
  const router = createBrowserRouter([

    // admin --------------------------------
    {
      path: "/admin",
      element: <AdminLayout/>,
      children:[
        {
          path:"admin-edit-profile",
          element:<AdminEditProfile/>
        },
        {
          path:"profile",
          element:<AdminProfile/>
        },
        {
          path:"attendence",
          element:<Attendence/>,
          children:[
            {
              path:"teacher-attendence",
              element: <TeacherAttendence/>
            },
            {
              path:"children-attendence",
              element: <ChildrenAttendence/>
            },
          ]
        },
        {
          path:"manage-teachers-profile",
          element: <ManageTeacherProfile/>
        },

        {
          path:"view-attendance/",
          element: <ViewTeacherAttendance/>
        },
        
        {
          path:"manage-parents-profile",
          element: <ManageParentsProfile/>
        },
        {
          path:"manage-doctors-profile",
          element: <ManageDoctorsProfile/>
        },
        {
          path:"manage-childrens-profile",
          element: <ManageChildrenProfile/>
        },
        // edit teachers
        {
          path:"edit-teacher-profile/:id",
          element: <EditTeacher/>
        },
        {
          path:"edit-parent-profile/:id",
          element: <EditParent/>
        },
        {
          path:"edit-doctor-profile/:id",
          element: <EditDoctor/>
        },
        {
          path:"edit-children-profile/:id",
          element: <EditChildrenProfile/>
        },
        

        {
          path:"manage-profile",
          element:<Profile/>,

        },
        {
          path:"healthrecords",
          element:<Health/>,
          children:[
            {
              path:"children-records",
              element: <ChildrenRecords/>
            },
          ]
        },
        {
          path:"salary",
          element:<Salary/>,
          children:[
            {
              path:"teacher-salary",
              element: <TeacherSalary/>
            },
            {
              path:"doctor-salary",
              element: <DoctorSalary/>
            },
          ]
        },
        {
          path:"communication",
          element:<Communication/>,
        },
        {
          path:"salary",
          element:<Salary/>,
          children:[
            {
              path:"teacher-salary",
              element: <TeacherSalary/>
            },
            {
              path:"doctor-salary",
              element: <DoctorSalary/>
            },
          ]
        },
        
        {
          path:"manage-teachers-communication",
          element:<TeacherCommunication/>,
        },
         {
          path:"admin-teacher-message/:id",
          element:<TeacherAdminMessage/>,
        },
        {
          path:"manage-parents-communication",
          element: <ParentsCommunication/>
        },
        {
          path:"admin-parent-message/:id",
          element: <ParentAdminMessage/>
        },
        {
          path:"manage-doctors-communication",
          element: <DoctorCommunication/>
        },
        {
          path:"admin-doctor-message/:id",
          element: <DoctorCommunication/>
        },
        
        
        
        
        {
          path:"activity",
          element:<Activity/>,
          children:[
            {
              path:"children-activity",
              element: <ManageChildrenActivity/>
            },
          ]
        },
        {
          path:"feedback",
          element:<AdminFeedback/>,
          children:[
            {
              path:"teachers-feedback",
              element: <TeacherFeedback/>
            },
            {
              path:"doctors-feedback",
              element: <DoctorsFeedback/>
            },
            {
              path:"parents-feedback",
              element: <ParentsFeedback/>
            },
          ]
        },

      ]
    },

    // admin login
    {
      path: "/admin-login",
      element: <AdminLogin/>,
    },

    // admin register
    {
      path: "/admin-register",
      element: <AdminRegister/>,
    },


    // parent login
    {
      path: "/parent-login",
      element: <UserLogin/>,
    },
    // user-register
    {
      path: "/parent-register",
      element: <UserRegister/>,
    },


    // teacher login
    {
      path: "/teacher-login",
      element: <TeacherLogin/>,
    },


    // teacher register
    {
      path: "/teacher-register",
      element: <TeacherRegister/>,
    },


    // teacher------------------------
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
          path:"childrens",
          element:<TeachChildren/>
        },
        {
          path:"children/:id",
          element:< TeachChildrenDetailedView/>
        },
        {
          path:"activity",
          element:< TeachChildrenActivity/>
        },
        {
          path:"view-activites/:id",
          element:< TeachChildrenViewActivity/>
        },
        {
          path:"children-attendance",
          element:<TeachChildrenAttendance/>
        },
        
        
        
        {
          path:"teacher-profile",
          element:< TeacherProfile/>
        },
        {
          path:"teacher-edit-profile/:id",
          element:< TeacherEditProfile/>
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
        },
        {
          path:"attendance",
          element:<ChildrensAttendance/>
        },
        {
          path:"view-attendance/:id",
          element: <ViewTeacherAttendance/>
        },


      ]
    },


    // doctor login
    {
    path:"doctor-login",
    element:<DoctorLogin/>
    },

    // doctor register
    {
      path:"doctor-register",
      element:<DoctorRegister/>
      },



    // doctor----------------------------
    {
      path: "/doctors",
      element: <DoctorLayout/>,
      children:[
        {
          path:"dashboard",
          element:<h1>dashboard</h1>
        },
        {
          path:"doctor-profile",
          element:<DoctorsProfile/>
        },
        {
          path:"doctor-consultation",
          element:< DoctorConsultation/>
        },
        {
          path:"doctor-healthrecords",
          element:<Doctorhealthrecords/>
        },
        {
          path:"doctor-communication",
          element:<Doctorcommunication/>
        },
        {
          path:"doctor-children",
          element:<Doctorchildren/>
        },
        {
          path:"doctor-salary",
          element:<Doctorsalary/>
        },
        {
          path:"doctor-feedback",
          element:<Doctorfeedback/>
        }
         
       
      ]
    },


    // parents----------------------------------------
    {
      path: "/",
      element: <UserLayout/>,
      children:[
        {
          path:"",
          element:<UserHome/>
        },
        {
          path:"userprofile",
          element:<UserProfile/>
        },
        {
          path:"children",
          element:< UserChildren/>
        },
        {
          path:"healthrecords",
          element:<UserHealthRecords/>
        },
        {
          path:"add-children",
          element:<AddChildren/>
        },
        {
          path:"availabilitycalender",
          element:<UserCalender/>
        },

        {
          path:"usercommunication",
          element:<UserCommunication/>
        },

        {
          path:"activity",
          element:<UserActivity/>
        },
        {
          path:"userfeedback",
          element:<UserFeedback/>
        }
      ]
      },

      // parents login
    {
      path:"parent-login",
      element:<ParentLogin/>
      },
  
      // parents register
      {
        path:"parent-register",
        element:<ParentRegister/>
        },


  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
