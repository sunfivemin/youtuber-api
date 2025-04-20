import axios from "axios";
const BASE = "/youtubers";

export const getAllYoutubers = () => axios.get(BASE);
export const getYoutuber = (id) => axios.get(`${BASE}/${id}`);
export const createYoutuber = (data) => axios.post(BASE, data);
export const updateYoutuber = (id, data) => axios.put(`${BASE}/${id}`, data);
export const deleteYoutuber = (id) => axios.delete(`${BASE}/${id}`);
