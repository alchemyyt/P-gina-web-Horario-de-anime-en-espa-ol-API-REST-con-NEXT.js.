import axios from "axios";
export const getData = async (endpoint) => {

  try {
  const password = process.env.PASSWORD;
    const header = {
      headers: {
        authorization: `Bearer ${password}`,
      },
    };
    const response = await axios.get(
        `http://localhost:3000/api/v1/${endpoint}`,
        header
    );
    return response.data; // para poder retornar directo tuve que hacer un try catch con .then no retornaba
  } catch (error) {
    console.error("Error submitting anime data:", error);
    return error.response?.status || 500; // Return error status or 500 for internal server errors
  }
};
