import React from "react";
import { Link } from "react-router-dom";

function Communication() {
  return (
    <div className="my-5 flex flex-row justify-start gap-1  text-white ">
      <Link to={'/admin/manage-teachers-communication'}>
        <button className="bg-green-500 rounded-lg w-32 px-4 py-2 hover:bg-green-400 border  ">
          Teachers
        </button>
      </Link>
      <Link to={'/admin/manage-parents-communication'}>
        <button className="bg-green-500 rounded-lg w-32 px-4 py-2 hover:bg-green-400">
          Parents
        </button>
      </Link>
      <Link to={'/admin/manage-doctors-communication'}>
        <button className="bg-green-500 rounded-lg w-32 px-4 py-2 hover:bg-green-400">
          Doctors
        </button>
      </Link>
    </div>
  );
}

export default Communication;
