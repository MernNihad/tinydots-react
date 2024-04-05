import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAttendanceByTeacher, getAttendanceOfChildrenByTeacher } from "../api/admin";
import Spinner from "../spinner";

function ViewTeacherAttendanceOfStudents() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      navigate("/admin/children-attendance");
    }
  }, [id]);

  React.useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getAttendanceOfChildrenByTeacher('children',id);
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white px-4 py-10">
      

      {loading ? (
        <Spinner />
      ) : (
        <>
          {data &&
            data.map((item) => {
              const dateObj = new Date(item.date);
              const month   = dateObj.getUTCMonth() + 1; // months from 1-12
              const day     = dateObj.getUTCDate();
              const year    = dateObj.getUTCFullYear();

           

              // let status = false;

              // console.log(month,day,year);

              // if(month === Currentmonth && year === Currentyear && day === Currentday){

              // }

              console.log(new Date(),'date')

              return (
                <div className="" key={item._id}>

                <p key={item._id} className="border py-3 px-3 my-2 rounded">
                  <span>
                  { `${year} / ${month} / ${day} `}
                  </span>
                
                  <span className="ms-8">
                  {item.status === 'present' ?  'Present' : 'Absent'}
                  </span>
                </p>
                </div>

              );
            })}
        </>
      )}
    </div>
  );
}

export default ViewTeacherAttendanceOfStudents;
