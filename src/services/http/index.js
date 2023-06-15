import axios from 'axios';
import cookiesStorage from '../cookies/index'

const createInstance = () => {

    const token = cookiesStorage.get('token');

    const instance = axios.create({
        baseURL: 'https://helpful-woolens-elk.cyclic.app',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ?? `Bearer ${token}`
        }
    })

    return instance;
}

export default createInstance;