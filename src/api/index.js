import axios from 'axios';

const url = 'https://reqres.in/api/users/';

export const fetchTodo = () => axios.get(url);
export const createTodo = (newPost) => axios.post(url, newPost);
export const updateTodo = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);
