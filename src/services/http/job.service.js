import createInstance from './index'

const authInstance = createInstance()

export const jobsList = async () => {
    const { data: response } = await authInstance.get('/job-positions');
    
    return response;
}

export const jobsAplication = async (jobPositionId) => {
    console.log(typeof(id));
    const { data } = await authInstance.post('/job-applications', {
        jobPositionId,
    });
    
    return data;
}
