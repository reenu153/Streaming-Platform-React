import { BASE_URL } from '../constants/endpoints';

export const fetchClient = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('API Error:', data);
      throw data;
    }

    return data;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw error;
  }
};
