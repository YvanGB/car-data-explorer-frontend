// frontend/src/services/api.js
import axios from 'axios'
const apiUrl = 'http://127.0.0.1:5000/api';

const api = {
    fetchCars: async () => {
        try {
            const response = await axios.get(`${apiUrl}/cars`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de la récupération depuis la base de données : ', error);
        }
    },

    fetchCarsByBrand: async () => {
        try {
            const response = await axios.get(`${apiUrl}/carsByBrand`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de la récupération des voitures par marque : ', error);
        }
    },

    fetchCarsByModel: async () => {
        try {
            const response = await axios.get(`${apiUrl}/carsByModel`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de la récupération des voitures par modèle : ', error);
        }
    },

    fetchCarsByYear: async () => {
        try {
            const response = await axios.get(`${apiUrl}/carsByYear`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de la récupération des voitures par année : ', error);
        }
    },

    fetchCarsByState: async () => {
        try {
            const response = await axios.get(`${apiUrl}/carsByState`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de la récupération des voitures par état : ', error);
        }
    },

    fetchCarsByMileage: async () => {
        try {
            const response = await axios.get(`${apiUrl}/carsByMileage`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de la récupération des voitures par kilométrage : ', error);
        }
    },

    fetchCarsByPrice: async () => {
        try {
            const response = await axios.get(`${apiUrl}/carsByPrice`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de la récupération des voitures par prix : ', error);
        }
    },

    fetchCarsByColor: async () => {
        try {
            const response = await axios.get(`${apiUrl}/carsByColor`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de la récupération des voitures par couleur : ', error);
        }
    },

    fetchCarsByTitleStatus: async () => {
        try {
            const response = await axios.get(`${apiUrl}/carsByTitleStatus`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de la récupération des voitures par statut de titre : ', error);
        }
    },

    fetchAveragePriceByYear: async () => {
        try {
            const response = await axios.get(`${apiUrl}/averagePriceByYear`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de l\'agrégation de la moyenne des prix par année : ', error);
        }
    },

    fetchCarsCountByBrand: async () => {
        try {
            const response = await axios.get(`${apiUrl}/carsCountByBrand`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de l\'agrégation du nombre de voitures par marque : ', error);
        }
    },

    fetchCarsSortedByMileage: async () => {
        try {
            const response = await axios.get(`${apiUrl}/carsSortedByMileage`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de l\'agrégation des voitures triées par kilométrage croissant : ', error);
        }
    },

    fetchDistinctYears: async () => {
        try {
            const response = await axios.get(`${apiUrl}/distinctYears`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de l\'agrégation des années distinctes des voitures : ', error);
        }
    },

    fetchTotalPricesByBrand: async () => {
        try {
            const response = await axios.get(`${apiUrl}/totalPricesByBrand`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de l\'agrégation des prix totaux des voitures par marque : ', error);
        }
    },

    fetchAverageAndTotalPriceByYear: async () => {
        try {
            const response = await axios.get(`${apiUrl}/averageAndTotalPriceByYear`);
            return response.data;
        } catch (error) {
            console.log('Erreur lors de l\'agrégation de la moyenne et de la somme des prix par année : ', error);
        }
    }

    
};

export default api;
