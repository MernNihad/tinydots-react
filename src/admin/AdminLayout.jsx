import { FaBars } from "react-icons/fa";
// import {useNavigate} from 'react-router'
import { Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {

  const navigate = useNavigate()

  return (
    <div className="flex">
      <div className='p-10 bg-black h-screen text-white'>

        {/* admin title */}
        <div className="pt-5">
          <h1 className=" text-center">ADMIN</h1>
        </div>
        {/* -------- */}


        {/* input  */}
        <div className="pt-3 w-auto px-3">
          <input type="text" placeholder='Search' className=" w-full rounded-sm px-2 py-1 outline-none  border " />
        </div>
        {/* ------- */}



        {/* links */}
        <div className="mx-3 mt-14">
          <div onClick={() => navigate('/admin/dashboard')} className="py-3 px-2 flex items-center gap-3 hover:bg-white rounded-lg hover:text-black justify-center">
            <FaBars />
            <span>Dashboars</span>
          </div>
          <div onClick={() => navigate('/admin/accept')} className="py-2 px-2 flex items-center gap-3 hover:bg-white rounded-lg hover:text-black justify-center">
            <FaBars />
            <span>Accept/Reject</span>
          </div>
          <div onClick={() => navigate('/admin/profile')} className="py-2 px-2 flex items-center gap-3 hover:bg-white rounded-lg hover:text-black justify-center">
            <FaBars />
            <span>Manage Profile</span>
          </div>
          <div onClick={() => navigate('/admin/attendence')} className="py-2 px-2 flex items-center gap-3 hover:bg-white rounded-lg hover:text-black justify-center">
            <FaBars />
            <span>Attendence</span>
          </div>
          <div onClick={() => navigate('/admin/healthrecords')} className="py-2 px-2 flex items-center gap-3 hover:bg-white rounded-lg hover:text-black justify-center">
            <FaBars />
            <span>Health Records</span>
          </div>
          <div onClick={() => navigate('/admin/salary')} className="py-2 px-2 flex items-center gap-3 hover:bg-white rounded-lg hover:text-black justify-center">
            <FaBars />
            <span>Salary</span>
          </div>
          <div onClick={() => navigate('/admin/communication')} className="py-2 px-2 flex items-center gap-3 hover:bg-white rounded-lg hover:text-black justify-center">
            <FaBars />
            <span>Communication</span>
          </div>
          <div onClick={() => navigate('/admin/activity')} className="py-2 px-2 flex items-center gap-3 hover:bg-white rounded-lg hover:text-black justify-center">
            <FaBars />
            <span>Manage Activity</span>
          </div>
          <div onClick={() => navigate('/admin/feedback')} className="py-2 px-2 flex items-center gap-3 hover:bg-white rounded-lg hover:text-black justify-center">
            <FaBars />
            <span>Feedback</span>
          </div>
        </div>
        {/*  links */}
      </div>
      <div className="mx-9 py-6">
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout