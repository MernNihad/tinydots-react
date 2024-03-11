import { FaBars } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function Reject() {

    const navigate = useNavigate()

  return (
    <div>
      <div onClick={() => navigate('/admin/dashboard')} className="py-3 flex items-center gap-3 hover:bg-white hover:text-black justify-center">
            <FaBars />
            <span>Dashboars</span>
          </div>
    </div>
  )
}

export default Reject
