import createInstance from './index'

const authInstance = createInstance()

export const jobsList = async () => {
    const { data: response } = await authInstance.get('/job-positions');
    
    return response;
}
