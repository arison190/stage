import axios from 'axios';

const API_URL = 'http://localhost:5000/api/depenses'; // Remplacez par l'URL de votre API

export const getAllDepenses = async () => {
    const response = await axios.get(API_URL);
    return response;
};

export const addDepense = async (depenseData) => {
    const response = await axios.post(API_URL, depenseData);
    return response;
};

export const updateDepense = async (id, depenseData) => {
    const response = await axios.put(`${API_URL}/${id}`, depenseData);
    return response;
};

export const deleteDepense = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response;
};