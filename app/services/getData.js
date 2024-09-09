import axios from "axios";
export const getData = async (endpoint) => {
  try {
    const header = {
      headers: {
        authorization: `Bearer ${process.env.PASSWORD}`,
      },
    };
    const response = await axios.get(
      `http://localhost:3000/api/v1/${endpoint}` ||
        `https://horario-de-anime-en-castellano.vercel.app/api/v1/${endpoint}`,
        header
    );
    return response.data; // para poder retornar directo tuve que hacer un try catch con .then no retornaba
  } catch (error) {
    console.error("Error submitting anime data:", error);
    return error.response?.status || 500; // Return error status or 500 for internal server errors
  }
};
