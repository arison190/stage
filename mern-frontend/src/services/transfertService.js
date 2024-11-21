// src/services/transfertServices.js
const BACKEND_URL = 'http://localhost:5000/api/depenses'; // URL de votre backend

// Fonction pour récupérer tous les transferts
export const getTransferts = async () => {
    try {
        const response = await fetch(BACKEND_URL);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des transferts');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Fonction pour créer un nouveau transfert
export const createTransfert = async (transfertData) => {
    try {
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transfertData),
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la création du transfert');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Fonction pour mettre à jour un transfert
export const updateTransfert = async (id, transfertData) => {
    try {
        const response = await fetch(`${BACKEND_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transfertData),
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la mise à jour du transfert');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Fonction pour supprimer un transfert
export const deleteTransfert = async (id) => {
    try {
        const response = await fetch(`${BACKEND_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la suppression du transfert');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};