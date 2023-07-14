import createInstance from './index'
import cookiesStorage from '../../services/cookies/index'

const authInstance = createInstance()

export const login = async (data) => {
    const { data: response } = await authInstance.post('/auth/send-candidate-otp', data);

    return response;
}

export const register = async (data) => {
    const { data: response } = await authInstance.post('/auth/send-candidate-otp', data);

    return response;
}

export const obtainUser = async (otp) => {
    const email = cookiesStorage.get('email')
    console.log(email)
    const { data } = await authInstance.post('/auth/signin-candidate', {
        otp,
        email,
    });

    return data;
}

export const signUp = async (data) => {
    const { data: response } = await authInstance.post('/auth/signup-candidate', data);

    return response;
}
