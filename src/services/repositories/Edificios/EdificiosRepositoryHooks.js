import { useEffect, useState } from "react";
import EdificiosApi from "./EdificiosRepositoryApi";

const useEdificios = () => {
  const [edificios, setEdificios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEdificios = async () => {
      try {
        const data = await EdificiosApi.getEdificios();
        const activos = data.edificios.filter((e) => e.estatus === "Activo");
        setEdificios(activos);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEdificios();
  }, []);

  return { edificios, loading, error };
};

export default useEdificios;
