import createInstance from './index'

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
    const { data } = await authInstance.post('/auth/signin-candidate', {
        otp,
    });

    return data;
}

export const signUp = async (data) => {
    const { data: response } = await authInstance.post('/auth/signup-candidate', data);

    return response;
}
