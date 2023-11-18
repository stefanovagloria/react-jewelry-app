import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import ProductsList from "./components/Products/ProductsList";
import ProductDetails from './components/Products/ProductDetails';
import Gallery from "./components/Gallery";
import About from "./components/About";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Order from "./components/Order";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation></Navigation>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
