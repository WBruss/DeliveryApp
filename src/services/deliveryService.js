import { get, post } from './api';

export const getDeliveries = async () => {
    console.log("mydeliveryrequests ")
    let response = await get(`mydeliveryrequests/`)
    return response.data;
}

export const createDelivery = async (values) => {
    let response = await post(`deliveries/`, values);
    console.log("Post ", response.data)
    return response.data;
}

export const getDeliveryToOffice = async () => {
    let response = await get(`deliveriestooffice/`);
    console.log("deliveriestooffice ", response.data)
    return response.data;
}

export const receiveDelivery = async (delivery_id) => {
    let response = await get(`api_receive_item?delivery_id=${delivery_id}`);
    console.log("deliveriestooffice ", response.data)
    return response.data;
}

