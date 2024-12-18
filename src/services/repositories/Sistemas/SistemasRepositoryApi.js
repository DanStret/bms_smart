import api from "../../ApiService";

const getSistemas = async (idEdificio, idPiso) => {
  const response = await api.get(
    `/sistemas?id_edificio=${idEdificio}&id_piso=${idPiso}`
  );
  return response.data;
};

export default { getSistemas };
