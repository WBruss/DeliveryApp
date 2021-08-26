import axios from 'axios';

const BASE_URL = `http://localhost:5000`;

export const getDeliveries = async () => {

    let response = await axios.get(`http://localhost:5000/mydeliveryrequests/`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });

    console.log("Get ", response)

    return response.data;
}

export const createDelivery = async (values) => {

    let response = await axios.post(`http://localhost:5000/deliveries/`, values,{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });

    console.log("Post ", response.data)

    return response.data;

}

export const getDeliveryToOffice = async () => {

    let response = await axios.get(`http://localhost:5000/deliveriestooffice/`,{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });

    console.log("deliveriestooffice ", response.data)

    return response.data;

}

export const receiveDelivery = async (delivery_id) => {

    let response = await axios.get(`http://localhost:5000/api_receive_item?delivery_id=${delivery_id}`,{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });

    console.log("deliveriestooffice ", response.data)

    return response.data;

}