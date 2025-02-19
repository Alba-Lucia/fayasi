import { useState } from "react";

export const AddProducts = () => {
  // Estado para almacenar los productos agregados
  const [products, setProducts] = useState<
    { name: string; price: string; image: string }[]
  >([]);

  // Estado para el producto actual que se va a agregar
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: null as File | null,
  });

  // Estado para la vista previa de la imagen
  const [preview, setPreview] = useState<string | null>(null);

  // Manejar cambios en los inputs de texto
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar la selección de la imagen
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProduct({ ...product, image: file });

      // Crear una URL temporal para vista previa
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  // Agregar producto a la lista
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.image) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Guardar la imagen como URL temporal
    const newProduct = {
      name: product.name,
      price: product.price,
      image: preview as string, // Usamos la URL de vista previa como imagen
    };

    setProducts([...products, newProduct]);

    // Limpiar el formulario
    setProduct({ name: "", price: "", image: null });
    setPreview(null);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>
      <form onSubmit={handleAddProduct}>
        {/* Nombre */}
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded-lg"
            placeholder="Nombre del producto"
            value={product.name}
            onChange={handleChange}
          />
        </div>

        {/* Precio */}
        <div className="mb-4">
          <label className="block text-gray-700">Precio</label>
          <input
            type="number"
            name="price"
            className="w-full p-2 border rounded-lg"
            placeholder="Precio"
            value={product.price}
            onChange={handleChange}
          />
        </div>

        {/* Imagen */}
        <div className="mb-4">
          <label className="block text-gray-700">Imagen del Producto</label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 border rounded-lg"
            onChange={handleImageChange}
          />
        </div>

        {/* Vista Previa */}
        {preview && (
          <div className="mb-4">
            <p className="text-gray-700">Vista Previa:</p>
            <img
              src={preview}
              alt="Vista previa"
              className="w-full h-40 object-cover rounded-lg border"
            />
          </div>
        )}

        {/* Botón de Agregar */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
        >
          Agregar Producto
        </button>
      </form>

      {/* Mostrar Productos Agregados */}
      <h2 className="text-xl font-bold mt-6">Lista de Productos</h2>
      <div className="mt-4">
        {products.map((p, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg flex items-center gap-4 mb-2"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <p className="font-bold">{p.name}</p>
              <p className="text-gray-700">${p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
