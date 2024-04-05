import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { getViewAllActivitiesByChildId } from "../api/admin";
import Spinner from "../spinner";

function TeachChildrenViewActivity() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      navigate("/teacher/children-attendance");
    }
  }, [id]);

  React.useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getViewAllActivitiesByChildId(id);
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
              return (
                <p key={item._id} className="border py-3 px-3 my-2 rounded">
                  {item.activityDetails}
                </p>
              );
            })}
        </>
      )}
    </div>
  );
}

export default TeachChildrenViewActivity;
