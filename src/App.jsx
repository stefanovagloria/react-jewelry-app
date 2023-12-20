import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/home/Home";
import ProductsList from "./components/products/productsList/ProductsList";
import ProductDetails from "./components/products/productDetails/ProductDetails";
import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Order from "./components/order/Order";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Logout from "./components/logout/Logout";
import MyOrders from "./components/my-Orders/myOrders";
import AuthGuard from "./components/AuthGuard";

function App() {
  return (
    <AuthProvider>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/order"
          element={
            <AuthGuard>
              <Order />
            </AuthGuard>
          }
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/logout"
          element={
            <AuthGuard>
              <Logout />
            </AuthGuard>
          }
        />
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App;
