import axios from "axios";
const domain = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getData = async (endpoint) => {
  try {
    const postHeader = {
      headers: {
        authorization: `Bearer ${process.env.PASSWORD}`,
      },
    };
    const response = await axios.get(`${domain}api/v1/${endpoint}`, postHeader);
    return response.data; // para poder retornar directo tuve que hacer un try catch con .then no retornaba
  } catch (error) {
    console.error("Error submitting anime data:", error);
    return error.response?.status || 500; // Return error status or 500 for internal server errors
  }
};
