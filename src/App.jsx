import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnouncementBar";



function App() {
  return (
    <BrowserRouter basename="/choupi-juni">
       <AnnouncementBar />
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:productId"
          element={<ProductDetails />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;