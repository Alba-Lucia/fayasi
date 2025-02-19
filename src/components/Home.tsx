import { Carousel } from "./Carrusel";
import { ProductList } from "./ProductList";

export const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-20">
      {/* Hero */}
      <section className="relative w-full h-[85vh] bg-center bg-[url('/hero.png')] bg-cover bg-bottom flex items-left">
        <div className=" content w-[90vw] max-w-[1280px] mx-auto">
          <div className="w-[50%] max-sm:w-[90%] ">
            <h1 className="text-white text-left text-6xl max-sm:text-3xl max-md:text-5xl mt-10">
              Creaciones únicas para realzar tu estilo
            </h1>
          </div>
        </div>
      </section>

      {/* Sección de colección */}
      <section className="w-full content text-center">
        <h2 className="text-purple-600 font-bold text-3xl pb-6">Nuestra colección</h2>
        <div className="m-6">
          <Carousel />
        </div>
      </section>

      {/* Sección de nuevos productos */}
      <section className="w-full content text-center">
        <h2 className="text-purple-600 font-bold text-3xl p-6">Nuevos Productos</h2>
        <div className="my-8">
          <ProductList />
        </div>
      </section>
    </div>
  );
};
