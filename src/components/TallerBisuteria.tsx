
export const TallerBisuteria = () =>{
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="h-[50vh] bg-[url('/jewelry-wooden.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"></div>

      {/* Lo que Aprenderás */}
      <div className="content">
        <section id="talleres" className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-bold text-center text-purple-900 m-6">
            Taller de bisuteria
          </h2>
          <p className="">¿Quieres sacar a relucir tu CREATIVIDAD?</p>
          <p>
            ¿Te gustan las MANUALIDADES?
            <span>
              ¿Te gustaría aprender a DISEÑAR y CREAR tus porpios accesorios?
            </span>
          </p>
          <p>¡ESTE CURSO ES LO QUE ESTABAS BUSCANDO!</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-purple-50 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-purple-800">
                Técnicas Básicas
              </h4>
              <p className="mt-2 text-gray-600">
                Aprenderás sobre herramientas esenciales, materiales y técnicas
                fundamentales para crear accesorios sencillos pero elegantes.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-purple-800">
                Diseño y Estilo
              </h4>
              <p className="mt-2 text-gray-600">
                Explora combinaciones de colores, tipos de cuentas y tendencias
                para desarrollar tu propio estilo único.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-purple-800">
                Creación y Venta
              </h4>
              <p className="mt-2 text-gray-600">
                Descubre cómo transformar tu pasión en un negocio rentable,
                aprendiendo sobre branding y comercialización de tus piezas.
              </p>
            </div>
          </div>
        </section>

        {/* Galería */}
        <section id="galeria" className="py-16 px-6 bg-purple-50">
          <h2 className="text-3xl font-bold text-center text-purple-900">
            Galería de Creaciones
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <img
              src="/gallery/gallery2.jpg"
              alt="Bisutería 1"
              className="rounded-lg shadow-md"
            />
            <img
              src="/gallery/gallery1.jpg"
              alt="Bisutería 2"
              className="rounded-lg shadow-md"
            />
            <img
              src="/gallery/gallery3.jpg"
              alt="Bisutería 3"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
