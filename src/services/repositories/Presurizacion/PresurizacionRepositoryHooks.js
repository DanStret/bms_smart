import { useState, useEffect } from "react";
import PresurizacionApi from "./PresurizacionRepositoryApi";

const usePresurizacionData = (idSistema) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!idSistema) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await PresurizacionApi.getDataPresurizacionBySistema(idSistema);

        if (response.status === "success" && response.data_presurizacion) {
          setData(response.data_presurizacion); // Datos únicos
        } else {
          throw new Error(response.message || "No hay datos disponibles");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [idSistema]);

  return { data, loading, error };
};

export default usePresurizacionData;
