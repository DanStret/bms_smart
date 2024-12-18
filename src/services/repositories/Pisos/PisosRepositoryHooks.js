import { useEffect, useState } from "react";
import PisosApi from "./PisosRepositoryApi";

const usePisos = (idEdificio) => {
  const [pisos, setPisos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!idEdificio) return;

    const fetchPisos = async () => {
      setLoading(true);
      try {
        const data = await PisosApi.getPisosByEdificio(idEdificio);
        setPisos(data.pisos);
      } catch (err) {
        console.error("Error fetching pisos", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPisos();
  }, [idEdificio]);

  return { pisos, loading };
};

export default usePisos;
