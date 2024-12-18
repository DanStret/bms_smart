import React, { useState } from "react";
import { useSistemaDetalle, useDataPresurizacion } from "../../services/repositories/Sistemas/SistemasRepositoryHooks";

const SistemaDetalleView = ({ idSistema }) => {
  const { sistema, loading, error } = useSistemaDetalle(idSistema);
  const { data, loading: dataLoading, fetchData } = useDataPresurizacion(idSistema);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {loading ? (
        <div className="text-gray-600">Cargando detalles del sistema...</div>
      ) : error ? (
        <div className="text-red-500">Error: {error.message}</div>
      ) : (
        sistema && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{sistema.nombre}</h2>
            <p><strong>Tipo:</strong> {sistema.tipo}</p>
            <p><strong>Estatus:</strong> {sistema.estatus}</p>
            <p><strong>Instalación:</strong> {sistema.fecha_instalacion}</p>

            {/* Botón para consultar Data Presurización */}
            <button
              onClick={fetchData}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Ver Data Presurización
            </button>

            {/* Data Presurización */}
            {dataLoading ? (
              <div className="text-gray-500 mt-4">Cargando data...</div>
            ) : (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Data Presurización</h3>
                <ul className="list-disc list-inside">
                  {data.map((item) => (
                    <li key={item.id}>
                      <strong>Frecuencia:</strong> {item.frecuencia} Hz | 
                      <strong> Corriente:</strong> {item.corriente} A
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default SistemaDetalleView;
