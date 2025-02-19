import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrolling...");
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Aquí se elimina scrollPosition como dependencia

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav
      className={`bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 transition-all duration-300 z-[100] ${
        scrollPosition > 0 ? "fixed top-0 left-0 w-full" : "relative"
      }`}
    >
      <div className="header mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="w-20 max-sm:w-14">
          <img src="/logo.svg" alt="Logo" />
        </Link>

        {/* Botón del menú (solo en móvil) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-purple-950 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-500 z-50">
          <li>
            <Link to="/" className="hover:text-gray-700">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-700">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/taller" className="hover:text-gray-700">
              Taller
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú desplegable en móviles */}
      <ul
        className={`absolute top-full left-0 w-full h-[calc(100vh-4rem)] bg-purple-500/70 text-purple-600 p-10 space-y-6 transition-all duration-300 z-50 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-10px] hidden"
        }`}
      >
        <li>
          <Link
            to="/"
            className="p-3 rounded-2xl bg-white block text-center text-lg hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="p-3 rounded-2xl bg-white block text-center text-lg hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Productos
          </Link>
        </li>
        <li>
          <Link
            to="/taller"
            className="p-3 rounded-2xl bg-white block text-center text-lg hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Taller
          </Link>
        </li>
      </ul>
    </nav>
  );
};
