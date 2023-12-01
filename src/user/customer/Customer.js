import request from "../../component/common/axios";

export const login = async (data) => {
  return await request.post(`login/oauth2/code/google`, data)
};

export const loginUser = async (data) => {
  return await request.post(`login`, data)
};
export const createUser = async (data) => {
  return await request.post(`register`, data)
};
export const getAllUsers = async () => {
  return await request.get(`customer/getAll`).catch(e=>console.log(e.config.headers));
};
// export const getUser = async (data) => {
//   return await request.get(`customer`, data);
// };
