import axios from 'axios';
import cookiesStorage from '../cookies/index'

const createInstance = () => {

    const token = cookiesStorage.get('token');

    const instance = axios.create({
        //baseURL: 'https://helpful-woolens-elk.cyclic.app',
        baseURL: 'https://173.254.242.213:3000',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    return instance;
}


export default createInstance;

// /utils/departments