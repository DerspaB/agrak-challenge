import axios from 'axios';

export const userApi = axios.create({
  baseURL: 'https://635017b9df22c2af7b630c3e.mockapi.io/api/v1/users', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});