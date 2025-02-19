// import { dataProduct } from "../data/dataProduct";

// export const ProductList = () => {
//   return (
//     <div className="">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {dataProduct.map((producto, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-104"
//           >
//             {/* Imagen del producto */}
//             <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
//               <img
//                 src={producto.imagen}
//                 alt={producto.title}
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             {/* Información */}
//             <div className="p-4 text-center">
//               <p className="text-xl font-semibold text-gray-800">
//                 {producto.title}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { dataProduct } from "../data/dataProduct";
import { Producto } from "../types";

export const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dataProduct.map((producto, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => setSelectedProduct(producto)}
          >
            {/* Imagen del producto */}
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
              <img
                src={producto.imagen}
                alt={producto.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Información */}
            <div className="p-2 text-center">
              <p className="text-md font-semibold text-gray-800">
                {producto.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          onClick={closeModal} // Cierra el modal al hacer clic en el fondo
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center relative"
            onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
          >
            <button
              className="absolute top-3 right-3 p-2 border border-gray-200 rounded-full bg-white/40 backdrop-blur-xs shadow-lg hover:text-gray-900"
              onClick={closeModal}
            >
              ✖
            </button>

            {/* Imagen del producto */}
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <img
                src={selectedProduct.imagen}
                alt={selectedProduct.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Información del producto */}
            <h2 className="text-2xl font-bold text-gray-800 mt-4">
              {selectedProduct.title}
            </h2>
            <p className="text-gray-600 mt-2">{selectedProduct.descripcion}</p>
          </div>
        </div>
      )}
    </>
  );
};
