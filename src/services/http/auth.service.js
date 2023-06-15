import createInstance from './index'

const authInstance = createInstance()

export const login = async (data) => {
    const { data: response } = await authInstance.post('/auth/send-candidate-otp', data);
    
    return response;
}

export const obtainUser = async (otp) => {
    const { data } = await authInstance.post('/auth/signin-candidate', {
        otp,
    });
    
    return data;
}

