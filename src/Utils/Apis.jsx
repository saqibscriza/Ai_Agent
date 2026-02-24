import axios from 'axios'
const token = `Bearer ${sessionStorage.getItem('token')}`;
console.log('value token ------', token)
// const token = sessionStorage.getItem('token');
// const Domain = 'http://192.168.21.232:5000';
// const localDomain = 'http://192.168.21.232:5000';
// const Domain = 'https://auth.edu2all.in/sch';
// const Domain = 'https://auth.edu2all.in/ivr/';
const Domain = 'http://192.168.22.193:5050/';

// ******************************************************************************************************
// Login  //
// ******************************************************************************************************

export const LoginApi = async (data) => {
  try {
    var res = await axios.post(`${Domain}auth/login`, data);
    if (res) {
      return res;
    } else {
      return []
    }
  } catch (error) {
    return [];
  }
}



// Vendor management API's ------------------


// Add Vendor API post

export const addVendorApi = async (data) => {
  try {
    axios.defaults.headers.common["Authorization"] = token;
    var res = await axios.post(`${Domain}vendor/create`, data);
    if (res) {
      return res;
    } else {
      return []
    }
  } catch (error) {
    return [];
  }
}
// get all vendor data
export const getVendorAllData = async () => {
  try {
    axios.defaults.headers.common["Authorization"] = token;
    var res = await axios.get(`${Domain}vendor/getAll`);
    if (res) {
      return res;
    } else {
      return []
    }
  } catch (error) {
    return [];
  }
}
// get vendor data by id
export const getVendorDataById = async (id) => {
  try {
    axios.defaults.headers.common["Authorization"] = token;
    var res = await axios.get(`${Domain}vendor/getById/${id}`);
    if (res) {
      return res;
    } else {
      return []
    }
  } catch (error) {
    return [];
  }
}
// updateVendorDataById put
export const updateVendorDataById = async (id, data) => {
  try {
    axios.defaults.headers.common["Authorization"] = token;
    var res = await axios.put(`${Domain}vendor/updateById/${id}`, data);
    if (res) {
      return res;
    } else {
      return []
    }
  } catch (error) {
    return [];
  }
}
// delete vendor api 
export const deleteVendorById = async (id) => {
  try {
    axios.defaults.headers.common["Authorization"] = token;
    var res = await axios.delete(`${Domain}vendor/deleteById/${id}`);
    if (res) {
      return res;
    } else {
      return []
    }
  } catch (error) {
    return [];
  }
}
// dgenerateId vendor api 
export const generateVendorId = async (id) => {
  try {
    axios.defaults.headers.common["Authorization"] = token;
    var res = await axios.get(`${Domain}vendor/generateVendorId`);
    if (res) {
      return res;
    } else {
      return []
    }
  } catch (error) {
    return [];
  }
}
// Vendor management API's ------------------



// agent API's ------------------

// get all industry api 
export const agentIndustryTyepe = async () => {
  try {
    axios.defaults.headers.common["Authorization"] = token;
    var res = await axios.get(`${Domain}meta/industries`);
    if (res) {
      return res;
    } else {
      return []
    }
  } catch (error) {
    return [];
  }
}
// get all use case api 
export const useCaseTyepe = async () => {
  try {
    axios.defaults.headers.common["Authorization"] = token;
    var res = await axios.get(`${Domain}meta/use-cases`);
    if (res) {
      return res;
    } else {
      return []
    }
  } catch (error) {
    return [];
  }
}
// create agent api 
export const CreateAgentApi = async (formData) => {
  try {
    axios.defaults.headers.common["Authorization"] = token;
    var res = await axios.post(`${Domain}agent/create`,formData);
    if (res) {
      return res;
    } else {
      return []
    }
  } catch (error) {
    return [];
  }
}
// Get all data agent api 
export const GetAllAgentDataApi = async () => {
  try {
    axios.defaults.headers.common["Authorization"] = token;
    var res = await axios.get(`${Domain}agent/getAll`);
    if (res) {
      return res;
    } else {
      return []
    }
  } catch (error) {
    return [];
  }
}
// GoalPromtPostApi
export const GoalPromtPostApi = async (data) => {
  try {
    axios.defaults.headers.common["Authorization"] = token;
    var res = await axios.post(`${Domain}agent/generateMainGoal`,data);
    if (res) {
      return res;
    } else {
      return []
    }
  } catch (error) {
    return [];
  }
}
// SystemPromtPostApi
export const SystemPromtPostApi = async (goalPromt) => {
  try {
    axios.defaults.headers.common["Authorization"] = token;
    var res = await axios.post(`${Domain}agent/generateSystemPrompt/${goalPromt}`);
    if (res) {
      return res;
    } else {
      return []
    }
  } catch (error) {
    return [];
  }
}
// agent API's ------------------