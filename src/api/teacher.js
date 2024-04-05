import { api } from "./instance";



import { teacher_api } from "./instance";

export const getChildrensRoleTeacher = async()=>{
  try {
    const response = await teacher_api.get('/childrens/');
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }


  // progress
  export const getChildrensRoleTeacherByAttendanceBased = async()=>{
    try {
      const response = await teacher_api.get('/by-attendance-based/childrens');
      return response.data;
    } catch (error) {
      throw error || 'An error occurred during signup.';
    }
    }

  

// teachers----------------
export const addingTeacher = async (propertyDatas) => {
    try {
      const response = await api.post('/teacher-register', propertyDatas);
      return response.data;
    } catch (error) {
      throw error || 'An error occurred during signup.';
    }
};


export const loginAsTeacher = async(data)=>{
  try {
    const response = await api.post(`/teacher-login`,data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}
// ---------------------------------------------
