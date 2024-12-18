import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import usePresurizacionData from "../../services/repositories/Presurizacion/PresurizacionRepositoryHooks";

const PresurizacionView = () => {
  const { id } = useParams(); // ID del sistema desde la URL
  const navigate = useNavigate();
  const { data, loading, error } = usePresurizacionData(id);

  if (loading) return <p className="text-center">Cargando datos de presurización...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Datos de Presurización</h1>
      {data ? (
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-800 rounded-lg">
            <strong>Frecuencia</strong>
            <p>{data.frecuencia} Hz</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <strong>Corriente</strong>
            <p>{data.corriente} A</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <strong>Potencia</strong>
            <p>{data.potencia} Kw</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <strong>Temperatura</strong>
            <p>{data.temperatura} ºC</p>
          </div>
        </div>
      ) : (
        <p className="text-center">No hay datos disponibles</p>
      )}
      <div className="mt-6 text-center">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition"
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

export default PresurizacionView;
