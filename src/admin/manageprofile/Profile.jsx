import { FaBars } from "react-icons/fa"
import { Outlet, useNavigate } from "react-router-dom"

function Profile() {
    const navigate = useNavigate();
    return (
        <div className="">
            <div className="flex gap-4">
                <div onClick={() => navigate('/admin/profile/manage-teacher-profile')} className="border-2 border-black px-6 py-1 flex gap-3 hover:bg-zinc-400 rounded-lg">
                    <FaBars className="mt-1" />
                    <span>Teachers</span>
                </div>
                <div onClick={() => navigate('/admin/profile/manage-children-profile')} className="border-2 border-black px-6 py-1 flex gap-3 hover:bg-zinc-400 rounded-lg">
                    <FaBars className="mt-1" />
                    <span>Children</span>
                </div>
                <div onClick={() => navigate('/admin/profile/manage-doctors-profile')} className="border-2 border-black px-6 py-1 flex gap-3 hover:bg-zinc-400 rounded-lg">
                    <FaBars className="mt-1" />
                    <span>Doctors</span>
                </div>
                <div onClick={() => navigate('/admin/profile/manage-parents-profile')} className="border-2 border-black px-6 py-1 flex gap-3 hover:bg-zinc-400 rounded-lg">
                    <FaBars className="mt-1" />
                    <span>Parents</span>
                </div>
            </div>
            <div className="">
                <Outlet/>
            </div>
        </div>
    )
}

export default Profile
