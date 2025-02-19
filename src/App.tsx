import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import {Navbar} from "./components/Header";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { TallerBisuteria } from "./components/TallerBisuteria";

export default function App() {
  return (
    <Router>
      <div className="w-full relative">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/taller" element={<TallerBisuteria />} />
          </Routes>
        </main>
        <div className="">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
