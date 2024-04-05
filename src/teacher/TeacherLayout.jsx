import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaAngleUp, FaCalendarAlt, FaClock, FaStackExchange, FaUser } from 'react-icons/fa'
import { CiCalendar} from 'react-icons/ci'
import { RxAvatar } from "react-icons/rx";
import {Link, Outlet, useNavigate} from "react-router-dom"
import { FaUsers } from "react-icons/fa";
function TeacherLayout() {

  const avatar = 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'

  const [active,setActive] = useState(false)
  const [toggleUser,setToggleUser] = useState(false)

  const handleToggleUser= ()=> setToggleUser(!toggleUser);

  const navigate = useNavigate();


  useEffect(() => {
    const teacherToken = localStorage.getItem("teacher-token");
    const teacherDetails = localStorage.getItem("teacher-details");

    if (!teacherToken || !teacherDetails) {
      navigate("/teacher-login", { state: { from: '/protected-route' } });
    }

  }, [navigate]);

  return (
    <div>
      <div className="">


        <div className="shadow-md py-2.5 flex items-center justify-between mx-4">
           <div className="flex gap-3 items-center  ">
             <img src={avatar} alt="" className='max-w-12 max-h-12' />
             <span className='uppercase'>logo here</span>
           </div>
           <div className="flex gap-2 relative">
             <div className="flex items-center gap-2 hover:border hover:rounded-xl px-3 py-2 cursor-pointer" onClick={handleToggleUser}>
                <RxAvatar size={30}/>
                <span className=' gap-2 items-center flex'> <span className='uppercase'>{JSON.parse(localStorage.getItem("teacher-details"))?.name}</span> { toggleUser ? <FaAngleUp/> : <FaAngleDown/> } </span>
             </div>
            { toggleUser && <div className={`top-16 right-0 py-2  absolute max-w-40 w-40 bg-white text-black text-sm`}>
                  <Link to={'/teacher/teacher-profile'}>
                  <p onClick={handleToggleUser} className='py-1.5 ps-4 hover:bg-gray-300 flex items-center gap-2 text-gray-500 transition-all ease-in-out hover:text-black font-medium'> <span><FaUser/> </span> Profile</p>
                  </Link>
             </div>}

           </div>
        </div>
         

         <div className="flex ">
            <div className="max-w-60 w-60  px-2.5 pt-5 bg-white shadow-2xl rounded-lg h-screen ">
               <Link to={'/teacher/attendance'} ><p className='px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg'> <span><FaCalendarAlt size={20} /></span> Attendance </p></Link>
               <Link to={'/teacher/childrens'}>
                  <p className='px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg'> <span><FaUser size={20} /></span> Childrens </p>
               </Link>
               <Link to={'/teacher/activity'}>
                  <p className='px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg'> <span><FaStackExchange size={20} /></span> Activity </p>
               </Link>
               <Link to={'/teacher/children-attendance'}>
                  <p className='px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg'> <span><FaStackExchange size={20} /></span> Children Attendance </p>
               </Link>
               <p className='px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg'> <span><FaStackExchange size={20} /></span> Health Records </p>
               <p className='px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg'> <span><FaStackExchange size={20} /></span> COmmunication </p>
            </div>
            <div className="mx-4 w-full rounded-lg px-0 ">
              <Outlet/>
            </div>
         </div>
      </div>
    </div>
  )
}

export default TeacherLayout