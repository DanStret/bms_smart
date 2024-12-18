import { useEffect, useState } from "react";
import SistemasApi from "./SistemasRepositoryApi";

const useSistemas = (idEdificio, idPiso) => {
  const [sistemas, setSistemas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!idEdificio || !idPiso) return;

    const fetchSistemas = async () => {
      setLoading(true);
      try {
        const data = await SistemasApi.getSistemas(idEdificio, idPiso);
        setSistemas(data.sistemas);
      } catch (err) {
        console.error("Error fetching sistemas", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSistemas();
  }, [idEdificio, idPiso]);

  return { sistemas, loading };
};

export default useSistemas;
