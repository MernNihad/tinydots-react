import React from "react";
import { IoMdClose } from "react-icons/io";

function Modals({setIsModalToggle,isModalToggle,name,email,password,age,number,gender,image,housename,statusField = true,place,city,state,qualification,isStatus}) {
  return (
    <>
      <div
        className="absolute overflow-scroll  w-[600px] max-w-[600px] h-[300px] px-5 py-7 rounded-lg bg-white shadow-2xl  "
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div className="flex justify-end">
          <h1 className="mb-4 break-words text-2xl">
            {" "}
            <IoMdClose onClick={()=>setIsModalToggle(!isModalToggle)} />{" "}
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-3  font-medium">
            <p className=" px-3 py-3 border">Name : {name}</p>
            <p className=" px-3 py-3 border">Email : {email}</p>
            <p className=" px-3 py-3 border">Password : {password}</p>
            <p className=" px-3 py-3 border">Age : {age}</p>
            <p className=" px-3 py-3 border">Number : {number}</p>
            <p className=" px-3 py-3 border">Gender : {gender}</p>
            <p className=" px-3 py-3 border">
                <img src={image} loading="lazy" className="w-8 h-8" />
            </p>
            <p className=" px-3 py-3 border">House Name : {housename}</p>
            <p className=" px-3 py-3 border">Place : {place}</p>
            <p className=" px-3 py-3 border">State : {state}</p>
            <p className=" px-3 py-3 border">City : {city}</p>
            
            <p className=" px-3 py-3 border">Qualification : {qualification}</p>
            { statusField && <p className=" px-3 py-3 border">Status : {isStatus ? 'Approved' : 'Rejected'}</p>}

        </div>
      </div>
    </>
  );
}

export default Modals;
