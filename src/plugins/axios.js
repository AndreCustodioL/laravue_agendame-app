import axios from 'axios';
import { errorMessage } from '@/utils/helpers';

axios.defaults.withXSRFToken = true;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL

axios.interceptors.response.use(
    (response)=>response,
    (error)=>{
        const response = error.response;
        const httpError = response.data.error;
        const status = response.status;
        const message = errorMessage(httpError);
        return Promise.reject({
            message,
            status
        });
})