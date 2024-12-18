import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useEdificios from "../../services/repositories/Edificios/EdificiosRepositoryHooks";
import usePisos from "../../services/repositories/Pisos/PisosRepositoryHooks";
import useSistemas from "../../services/repositories/Sistemas/SistemasRepositoryHooks";

const EdificiosView = () => {
  const navigate = useNavigate(); // Para redirigir a otras vistas
  const { edificios, loading, error } = useEdificios();
  const [selectedEdificio, setSelectedEdificio] = useState(null);
  const { pisos, loading: pisosLoading } = usePisos(selectedEdificio);
  const [selectedPiso, setSelectedPiso] = useState(null);
  const { sistemas, loading: sistemasLoading } = useSistemas(
    selectedEdificio,
    selectedPiso
  );

  const handleViewData = (sistema) => {
    if (sistema.tipo === "Presurización") {
      navigate(`/presurizacion/${sistema.id_sistema}`);
    } else {
      alert(`No hay datos implementados aún para el tipo: ${sistema.tipo}`);
    }
  };

  return (
    <div className="container mx-auto flex justify-center p-4 bg-blue-100">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-white bg-blue-500 p-2 rounded text-center">Edificios</h1>

        {/* Cargar Edificios */}
        {loading && <p className="text-white bg-blue-400 p-2 rounded text-center">Cargando...</p>}
        {error && <p className="text-white bg-red-500 p-2 rounded text-center">Error: {error.message}</p>}
        <ul>
          {edificios.map((edificio) => (
            <li
              key={edificio.id_edificio}
              onClick={() => setSelectedEdificio(edificio.id_edificio)}
              className="cursor-pointer text-white bg-blue-400 p-2 rounded mb-2 hover:bg-blue-500 transition-colors text-center"
            >
              {edificio.nombre}
            </li>
          ))}
        </ul>

        {/* Cargar Pisos */}
        {pisosLoading && <p className="text-white bg-blue-400 p-2 rounded text-center">Cargando Pisos...</p>}
        {pisos.map((piso) => (
          <div
            key={piso.id_piso}
            onClick={() => setSelectedPiso(piso.id_piso)}
            className="cursor-pointer text-white bg-blue-400 p-2 rounded mb-2 hover:bg-blue-500 transition-colors text-center"
          >
            {piso.nombre}
          </div>
        ))}

        {/* Cargar Sistemas */}
        {sistemasLoading && <p className="text-white bg-blue-400 p-2 rounded text-center">Cargando Sistemas...</p>}
        {sistemas.map((sistema) => (
          <div key={sistema.id_sistema} className="mb-2 bg-blue-200 p-2 rounded text-center">
            <p className="text-white bg-blue-400 p-2 rounded mb-2">
              {sistema.nombre_sistema} ({sistema.tipo})
            </p>
            <button
              onClick={() => handleViewData(sistema)}
              className="bg-blue-600 py-1 px-3 rounded hover:bg-blue-700 transition"
            >
              Ver Datos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EdificiosView;
