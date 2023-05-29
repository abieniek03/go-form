import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://go-form-backend.vercel.app/api',
});

export default instance;
