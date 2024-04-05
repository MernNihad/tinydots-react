import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteTeacherById, getTeachersRoleAdmin, updateStatus } from "../../api/admin";
import Spinner from "../../spinner";
import { errorToast, successToast } from "../../toast";
import Modals from "../../components/Modals";

function ManageTeachersProfile() {
  const imageClassName = `className='w-12 h-12 rounded-full my-3'`;

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const [refresh,setRefresh] = useState(false);
  const [isModalToggle,setIsModalToggle] = useState(false);
  const [modalData,setModelData] = useState({});
  
  React.useEffect(() => {
    fetchAPI();
  }, [refresh]);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getTeachersRoleAdmin();
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleApprovedOrReject = async(id,status)=>{

    try {

      if(status ===  ''){
        return errorToast('Please choose anyone')
      }

      if(status === 'true'){
        status = true
      }

      if(status === 'false'){
        status = false
      }
      

        await updateStatus('teacher',id,Boolean(status));
        setRefresh(!refresh)
      } catch (error) {
        errorToast(
          error.response.data.message || error.message || "something went wrong!"
        );
      }
  }

  
  const handleModelView = (item)=> {
    setModelData(item)
    setIsModalToggle(!isModalToggle)
  }

  const handleDelete = async(id)=>{
    try {
      const status = confirm(`Are you sure delete this one ?`)
      if(!status) return true
      const response =  await deleteTeacherById(id);
      successToast(response?.message)
      setRefresh(!refresh)
    } catch (error) {
      errorToast(
        error.response.data.message || error.message || "something went wrong!"
      );
    }
  }

  return (
    <>
      {loading && (
        <div className=" w-full flex justify-center h-96 items-center">
          <Spinner />
        </div>
      )}
      {!loading && (
        <div className="flex flex-col">
          <Link to={'/admin/manage-profile'} className="my-5 py-2 px-8 rounded-md bg-slate-500 text-white w-fit">Back</Link>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light text-surface dark:text-black uppercase">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Profile
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Approved / Reject
                      </th>
                      <th scope="col" className="px-6 py-4">
                      </th>
                      <th scope="col" className="px-6 py-4">

                      </th>
                      <th scope="col" className="px-6 py-4">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className="transition-all ease-in-out  border-b  bg-neutral-50  text-black hover:text-black  hover:bg-slate-200"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium ">
                            <img
                              src={item.image}
                              alt={"preview"}
                              loading="lazy"
                              className={imageClassName}
                            />
                          </td>
                          <td className="overflow-x-scroll max-w-44 whitespace-nowrap px-6 py-4">
                            {item.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.isStatus ? 'Approved' : 'Rejected'}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <select
                              onClick={(e) =>
                                handleApprovedOrReject(item._id,e.target.value)
                              }
                              className="  px-8 py-2 rounded-sm text-black border"
                            >
                              <option value="">Select</option>
                              <option value="true">Approved</option>
                              <option value="false">Reject</option>
                            </select>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                                <button onClick={()=>handleModelView(item)} className="px-8 py-2 rounded-md text-white  border bg-slate-500">View</button>
                          </td>
                          {
                            // isModalToggle && <Modals {...item} handleModelView={handleModelView}  />
                          }
                          <td className="whitespace-nowrap px-6 py-4">
                              <Link to={`/admin/edit-teacher-profile/${item._id}`} state={item} >
                                <button className="px-8 py-2 rounded-md text-white  border bg-green-400 ">Edit</button>
                              </Link>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                                <button onClick={()=>handleDelete(item._id)} className="px-8 py-2 rounded-md text-white  border bg-red-500 ">Delete</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {   <div className="">
                  {isModalToggle && <Modals {...modalData} setIsModalToggle={setIsModalToggle} isModalToggle={isModalToggle} />}
                </div> }
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ManageTeachersProfile;
