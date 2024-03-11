import { FaBars } from "react-icons/fa";
// import {useNavigate} from 'react-router'
import { Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {

  const navigate = useNavigate()

  return (
    <div className="flex">
      <div className='max-w-64 bg-black h-screen text-white'>

        {/* admin title */}
        <div className="pt-5">
          <h1 className=" text-center">ADMIN</h1>
        </div>
        {/* -------- */}


        {/* input  */}
        <div className="pt-4 w-full px-3">
          <input type="text" placeholder='Search' className=" w-full rounded-sm px-2 py-1 outline-none  border " />
        </div>
        {/* ------- */}



        {/* links */}
        <div className="mx-3 mt-14">
          <div onClick={() => navigate('/admin/dashboard')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Dashboars</span>
          </div>
          <div onClick={() => navigate('/admin/accept')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Accept</span>
          </div>
          <div onClick={() => navigate('/admin/profile')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Manage Profile</span>
          </div>
          <div className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Dashboars</span>
          </div>
          <div className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Dashboars</span>
          </div>
          <div className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Dashboars</span>
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

export default AdminLayout