import api from "../../ApiService";

const getEdificios = async () => {
  const response = await api.get("/edificios");
  return response.data;
};

export default { getEdificios };
