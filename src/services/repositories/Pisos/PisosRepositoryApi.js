import api from "../../ApiService";

const getPisosByEdificio = async (idEdificio) => {
  const response = await api.get(`/pisos?id_edificio=${idEdificio}`);
  return response.data;
};

export default { getPisosByEdificio };
