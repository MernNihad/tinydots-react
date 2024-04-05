import {admin_api, api, teacher_api} from "./instance";

// -----------------------
export const adminLogin = async (credentials) => {
  try {
    const response = await api.post('/admin-login', credentials);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during login.';
  }
};
export const getAdminById = async (id) => {
  try {
    const response = await admin_api.get(`/admins/${id}`,);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during login.';
  }
};
export const updateAdminById = async(data,id)=>{
  try {
    const response = await admin_api.put(`/admins/${id}`,data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}



// ---------------
export const getTeachersRoleAdmin = async()=>{
  try {
    const response = await admin_api.get('/teachers');
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}

export const getTeacherById = async(id)=>{
  try {
    const response = await api.get(`/teachers/${id}`);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}
export const addActivityByTeacher = async(data)=>{
  try {
    const response = await teacher_api.post(`/teachers/add-activity`,data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}
export const getViewAllActivitiesByChildId = async(id)=>{
  try {
    const response = await api.get(`/teachers/view-activity/${id}`);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}


export const updateTeacherById = async(data,id)=>{
  try {
    const response = await teacher_api.put(`/teachers/${id}`,data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}

export const updateTeacherByIdTeacher = async(data,id)=>{
  try {
    const response = await teacher_api.put(`/teachers/${id}`,data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}


export const updateTeacherByIdAdmin = async(data,id)=>{
  try {
    const response = await admin_api.put(`/teachers/${id}`,data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}

export const deleteTeacherById = async(id)=>{
  try {
    const response = await admin_api.delete(`/teachers/${id}`);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}

export const updateStatus = async(type,id,status)=>{
  try {
    const response = await admin_api.post('/accept-users',{type,id,status});
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}

export const updateAttendanceByTeacher = async(type,id,status)=>{
  try {
    const date = new Date()
    const response = await teacher_api.post('/teachers-attendance',{type,id,status,date});
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}
export const getAttendanceByTeacher = async(type,id)=>{
  try {
    const response = await teacher_api.get('/teachers-attendance',{type,id});
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}

export const getAttendanceOfChildrenByTeacher = async(type,id)=>{
  try {
    const response = await teacher_api.get(`/children-attendance/${id}`,{type});
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}
// -----------------




// doctors----------------
export const addingDoctor = async (developerDatas) => {
  try {
    const response = await api.post('/doctor-register/', developerDatas);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
};
export const loginDoctor = async(data)=>{
try {
  const response = await api.post('/doctor-login/',data);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}

export const getDoctorsRoleAdmin = async()=>{
try {
  const response = await admin_api.get('/doctors/');
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}

export const getDoctorById = async(id)=>{
  
try {
  const response = await api.get(`/doctors/${id}`);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}
export const deleteDoctorById = async(id)=>{
  try {
    const response = await admin_api.delete(`/doctors/${id}`);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}

export const updateSatusOfDoctor = async(type,id,status)=>{
  try {
    const response = await api.post('/accept-users',{type,id,status});
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}
export const updateDoctorById = async(data,id)=>{
  try {
    const response = await api.put(`/doctors/${id}`,data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }
  export const updateDoctorByIdAdmin = async(data,id)=>{
    try {
      const response = await admin_api.put(`/doctors/${id}`,data);
      return response.data;
    } catch (error) {
      throw error || 'An error occurred during signup.';
    }
    }

    export const sentSingleMessageRoleAdmin = async(data,id)=>{
      try {
        const response = await admin_api.post(`/message/${id}`,data);
        return response.data;
      } catch (error) {
        throw error || 'An error occurred during signup.';
      }
      }
// ---------------------------------------------




// parent----------------
export const addingParent = async (developerDatas) => {
  try {
    const response = await api.post('/parent-register/', developerDatas);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
};
export const loginParent = async (data) => {
  try {
    const response = await api.post('/parent-login/', data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
};
export const getParentsRoleAdmin = async()=>{
try {
  const response = await admin_api.get('/parents/');
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}
export const getParentById = async(id)=>{
  try {
    const response = await api.get(`/parents/${id}`);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }

export const updateParentRoleAdmin = async(data,id)=>{
try {
  const response = await admin_api.put(`/parents/${id}`,data);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}

export const deleteParentById = async(id)=>{
try {
  const response = await admin_api.delete(`/parents/${id}`);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}
// ---------------------------------------------







// parent----------------
export const addingChildren = async (data) => {
  try {
    const response = await api.post(`/children-register/${JSON.parse(localStorage.getItem("details"))._id}`, data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
};

export const getChildrensRoleAdmin = async()=>{
try {
  const response = await admin_api.get('/childrens/');
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}

export const getChatsByIdAdminRole = async(id)=>{
  try {
    const response = await admin_api.get(`/message/${id}`);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }
  


export const getChildrens = async()=>{
  try {
    const response = await api.get('/childrens/');
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }

  export const getChildrensByParentId = async(id)=>{
    try {
      const response = await api.get(`/childrens/parent/${id}`);
      return response.data;
    } catch (error) {
      throw error || 'An error occurred during signup.';
    }
    }
export const getChildrenById = async(id)=>{
  try {
    const response = await api.get(`/childrens/${id}`);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }

export const updateChildren = async(data,id)=>{
try {
  const response = await api.put(`/childrens/${id}`,data);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}

export const updateChildrenAdminRole = async(data,id)=>{
  try {
    const response = await admin_api.put(`/childrens/${id}`,data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }
  
export const deleteChildrenById = async(id)=>{
try {
  const response = await admin_api.delete(`/childrens/${id}`);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}
// ---------------------------------------------

