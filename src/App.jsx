import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import AuthContext from "./contexts/authContext";
import { logout, signIn, signUp } from "./services/authService";
import Path from "../src/paths";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/home/Home";
import ProductsList from "./components/products/ProductsList";
import ProductDetails from "./components/products/ProductDetails";
import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Order from "./components/order/Order";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Logout from "./components/logout/Logout";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    signIn(values.email, values.password).then((userData) => {
      setAuth({userUid: userData.uid});
      
    });

    navigate(Path.Home);
    console.log(auth);
  };


  const registerSubmitHandler = (values) => {
    signUp(values.email, values.password).then((userData) => {
      setAuth(userData);
      navigate(Path.Home);
    });
  };

  const logoutHandler = () => {
    logout().then(() => setAuth({}));
    navigate(Path.Home);
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    isAuthenticated: localStorage.getItem("accessToken"),
    userUid: auth.userUid,
  };

  return (
    <>
      <AuthContext.Provider value={values}>
        <Navigation />

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
          <Route path="/logout" element={<Logout />} />
        </Routes>

        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
