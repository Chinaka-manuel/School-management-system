// filepath: c:\Users\TK\Desktop\MERN-School-Management-System-main\frontend\src\axiosConfig\axiosInstance.js
import axios from 'axios';

export const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

const axiosInstance = axios.create({
    baseURL: REACT_APP_BASE_URL,
});

export default axiosInstance;