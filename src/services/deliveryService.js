import axios from 'axios';

const BASE_URL = `http://localhost:5000`;

export const getDeliveries = async () => {

    let response = await axios.get(`http://localhost:5000/deliveries/`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });

    console.log("Get ", response)
}

export const createDelivery = async (values) => {

    let response = await axios.post(`http://localhost:5000/deliveries/`, values,{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });

    console.log("Post ", response)
}