import { FaBars } from "react-icons/fa";
// import {useNavigate} from 'react-router'
import { Outlet, useNavigate } from "react-router-dom";

function DoctorLayout() {

  const navigate = useNavigate()

  return (
    <div className="flex">
      <div className='max-w-64 bg-black h-screen text-white'>

        {/* teacher title */}
        <div className="pt-5">
          <h1 className=" text-center">Doctor</h1>
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
          <div onClick={() => navigate('/doctors/doctor-profile')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Profile</span>
          </div>
          <div onClick={() => navigate('/doctors/doctor-consultation')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Consultaion</span>
          </div>
          <div onClick={() => navigate('/doctors/doctor-healthrecords')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Health Records</span>
          </div>
          <div onClick={() => navigate('/doctors/doctor-communication')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Communication</span>
          </div>
          <div onClick={() => navigate('/doctors/doctor-children')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Children</span>
          </div>
          <div onClick={() => navigate('/doctors/doctor-salary')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Salary</span>
          </div>
          <div onClick={() => navigate('/doctors/doctor-feedback')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
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

export default DoctorLayout