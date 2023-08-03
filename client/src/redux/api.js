import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getTasks = () => axios.get(`${BASE_URL}/get`);
export const createTask = (task) => axios.post(`${BASE_URL}/create`, task);
export const updateTask = (id, task) => axios.patch(`${BASE_URL}/update/${id}`, task);
export const deleteTask = (id) => axios.delete(`${BASE_URL}/delete/${id}`);
export const getDetails = (id) => axios.get(`${BASE_URL}/view/${id}`);
export const searchTask = (key) => axios.get(`${BASE_URL}/search/${key}`);
