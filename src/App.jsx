import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import NavbarTest from "./components/NavbarTest";
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnouncementBar";



function App() {
  return (
    <BrowserRouter>
       <AnnouncementBar />
      <NavbarTest />

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