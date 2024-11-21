import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Remplacez par l'URL de votre API

const emailService = {
    sendEmail: async (emailData) => {
        try {
            const response = await axios.post(`${API_URL}/send`, emailData);
            return response.data; // Retourne la réponse de l'API
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Erreur lors de l\'envoi de l\'email');
        }
    },

    getAllEmails: async () => {
        try {
            const response = await axios.get(`${API_URL}/emails`);
            return response.data; // Retourne la liste des emails
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Erreur lors de la récupération des emails');
        }
    },

    deleteEmail: async (emailId) => {
        try {
            const response = await axios.delete(`${API_URL}/emails/${emailId}`);
            return response.data; // Retourne la réponse de l'API
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Erreur lors de la suppression de l\'email');
        }
    }
};

export default emailService; // Assurez-vous d'utiliser export default