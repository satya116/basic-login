import axios from 'axios';

const url = 'http://localhost:5555'

export const registerUser = async (data) => {
    try {
        await axios.post(`${url}/reg`, data)
        console.log(data);
    } catch (error) {
        console.log("Errror while calling registerUser API", error);
    }
}

export const loginUser = async (data) => {
    try {
        await axios.post(`${url}/login`, data)
        console.log(data);
    } catch (error) {
        console.log("Errror while calling registerUser API", error);
    }
}