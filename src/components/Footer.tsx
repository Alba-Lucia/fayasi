import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <footer className="mt-20 reltive z-0">
      {/* Footer Principal - Escritorio */}
      <div className=" block w-full bg-[url('/imgContact.png')] bg-cover bg-bottom">
        <div className="bg-purple-950/20 w-full py-20">
          <div className="content w-[80vw] max-md:w-[100vw]  relative">
            <h2 className="text-3xl text-gray-700 pb-10 font-bold">
              Contáctanos
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-md:p-10 bg-white/40 backdrop-blur-xs rounded-lg shadow-lg">
              {/* Formulario */}
              <div className="flex-1 w-full">
                <ContactForm />
              </div>

              {/* Información de la empresa */}
              <div className="flex-1 p-6 text-center md:text-left text-purple-900">
                <h2 className="text-2xl font-bold">Joyas Exclusivas</h2>
                <p className="mb-6 mt-2 text-gray-700 leading-relaxed max-md:max-w-[100%] max-w-[80%]">
                  Creaciones únicas y personalizadas para resaltar tu estilo. Trabajamos solo por encargo online.
                </p>
                {/* Redes Sociales */}
                <h2 className="text-2xl font-semibold mb-4">Síguenos</h2>

                <div className="flex justify-center md:justify-start space-x-6">
                  <a
                    href="https://wa.me/+573117728790?text=Hola, quiero más información"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition w-10"
                  >
                    <img src="/whatsapp.svg" alt="WhatsApp" />
                  </a>
                  <div className="flex justify-center md:justify-start space-x-6">
                    <a
                      href="https://www.instagram.com/fayasi_accessories?igsh=cGxoNGd5MjY1ejlq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                    >
                      <img
                        src="instagram.svg"
                        alt="Instagram"
                        className="w-10"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="hidden md:block bg-gray-800 border-t border-gray-700 text-white py-4 text-center text-sm">
        © {new Date().getFullYear()} Fayasi Exclusivas. Todos los derechos
        reservados.
      </div>

      {/* Navegación Móvil */}
      <div className="block md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 py-3 px-6 flex justify-between">
        {[
          { src: "/home.svg", alt: "Inicio" },
          { src: "/products.svg", alt: "Productos" },
          { src: "/categories.svg", alt: "Categorías" },
          { src: "/curses.svg", alt: "Cursos" },
          { src: "/ordenar.svg", alt: "Ordenar" },
        ].map((icon, index) => (
          <img
            key={index}
            className="w-8 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200"
            src={icon.src}
            alt={icon.alt}
          />
        ))}
      </div>
    </footer>
  );
};
