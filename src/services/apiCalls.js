import { API_URL } from "../constants/constants"

export async function fetchFromTMDB(endpoint) {
    try {
        const response = await fetch(`${API_URL}&${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const result = data.results;

        return result   
    } catch (error) {
        console.error('Error fetching data from TMDB:', error);
        throw error; // Re-throw the error for further handling if needed
    }
}