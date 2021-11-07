import axios from 'axios';

const BASE_URL = `http://localhost:5000/`;
// const BASE_URL = `https://delivery-backend-app.herokuapp.com/`;

const axiosApi = axios.create({
    baseURL: BASE_URL
});

axiosApi.interceptors.request.use(config => {
    console.log("Interceptor Request: ", config)
    let configuration = {
        ...config,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
        console.log("Interceptor Request configuration: ", configuration)
    return configuration
},
    error => Promise.reject(error),
    );

axiosApi.interceptors.response.use((response) =>
    response,

        async (error) => {

            if(error.response.status === 401){
                console.log("Interceptor Response: ", error.response);
                localStorage.clear();
                // window.location = "/login";
            }
            return Promise.reject(error.response.data);
        },
);

const { get, post, put, delete: destroy } = axiosApi;
export { get, post, put, destroy };