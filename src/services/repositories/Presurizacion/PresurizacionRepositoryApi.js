import api from "../../ApiService";

const getDataPresurizacionBySistema = async (idSistema) => {
  const response = await api.get(`/presurizacion/${idSistema}`);
  return response.data;
};

export default { getDataPresurizacionBySistema };
