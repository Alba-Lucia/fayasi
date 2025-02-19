export const ContactForm = () => {
    return (
      <div className=" p-8 bg-white shadow-md rounded-lg">
        <form className="space-y-6 ">
          <div>
            <input
              type="text"
              className="w-full bg-transparent border-b-2 border-gray-300 outline-none focus:border-purple-500 transition duration-300 py-4"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <input
              type="email"
              className="w-full bg-transparent border-b-2 border-gray-300 outline-none focus:border-purple-500 transition duration-300 py-4"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full bg-transparent border-b-2 border-gray-300 outline-none focus:border-purple-500 transition duration-300 py-4"
              placeholder="Asunto del mensaje"
            />
          </div>
          <button className="w-full bg-purple-600 text-white py-2 my-6 rounded-md hover:bg-purple-700 transition duration-300">
            Enviar
          </button>
        </form>
        
      </div>
    );
  };
  