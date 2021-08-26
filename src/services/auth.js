import { useContext } from "react";
import { useHistory } from 'react-router-dom';
import {AppContext} from "../App";
import axios from "axios";

const BASE_URL = `http://localhost:5000/auth`;


export const authenticate = async (values) => {
    let response = await axios.post(`${BASE_URL}/loginapi/`, values)
    console.log("Response: ", response)
    return response.data;
}

export const signUp = async (values) => {

    let response = await axios.post(`${BASE_URL}/signup/`, values)

    console.log("Response: ", response)

    return response.data;
}


