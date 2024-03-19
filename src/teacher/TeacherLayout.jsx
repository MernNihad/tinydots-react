import { FaBars } from "react-icons/fa";
// import {useNavigate} from 'react-router'
import { Outlet, useNavigate } from "react-router-dom";

function TeacherLayout() {

  const navigate = useNavigate()

  return (
    <div className="flex">
      <div className='max-w-64 bg-black h-screen text-white'>

        {/* teacher title */}
        <div className="pt-5">
          <h1 className=" text-center">TEACHER</h1>
        </div>
        {/* -------- */}


        {/* input  */}
        <div className="pt-4 w-full px-3">
          <input type="text" placeholder='Search' className=" w-full rounded-sm px-2 py-1 outline-none  border " />
        </div>
        {/* ------- */}



        {/* links */}
        <div className="mx-3 mt-14">
        <div className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Dashboard</span>
          </div>
          <div onClick={() => navigate('/teacher/teacherProfile')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Profile</span>
          </div>
          <div onClick={() => navigate('/teacher/children')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Children</span>
          </div>
          <div onClick={() => navigate('/teacher/manageactivity')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Manage Activity</span>
          </div>
          <div onClick={() => navigate('/teacher/attendenceform')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Attendence Form</span>
          </div>
          <div onClick={() => navigate('/teacher/healthrecords')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Health Records</span>
          </div>
          <div onClick={() => navigate('/teacher/communication')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Communication</span>
          </div>
          <div onClick={() => navigate('/teacher/salary')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Salary</span>
          </div>
          <div onClick={() => navigate('/teacher/consultation')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Consultation</span>
          </div>
          <div onClick={() => navigate('/teacher/childrenattendence')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Teacher's Attendence</span>
          </div>
          <div onClick={() => navigate('/teacher/feedback')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Feedback</span>
          </div>
        </div>
        {/*  links */}
      </div>
      <div className="mx-9 py-6">
        <Outlet />
      </div>
    </div>
  )
}

export default TeacherLayout 