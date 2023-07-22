import axios from 'axios';

const BASE_URL = 'http://20.244.56.144';

// Register company with John Doe Railway Server
export const registerCompany = async (companyData) => {
  try {
    const response = await axios.post(`${BASE_URL}/train/register`, companyData);
    return response.data;
  } catch (error) {
    console.error('Error registering company:', error);
    throw error;
  }
};

// Obtain authorization token for your company from the John Doe Railway Server
export const getAccessToken = async (authData) => {
  try {
    const response = await axios.post(`${BASE_URL}/train/auth`, authData);
    return response.data;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

// Get all trains data from the John Doe Railway Server
export const getAllTrains = async (accessToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/train/trains`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting all trains:', error);
    throw error;
  }
};

// Get details of a specific train from the John Doe Railway Server
export const getSingleTrain = async (trainNumber, accessToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/train/trains/${trainNumber}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting single train:', error);
    throw error;
  }
};