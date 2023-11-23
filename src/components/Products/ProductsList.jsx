import { useEffect, useState } from "react";
import styles from "./ProductsList.module.css";
import ProductItem from "./ProductItem";
import ProductEditor from "./ProductEditor";
import { getAllProducts } from "../../services/productService";
import { isUserLoggedIn } from "../../utils";
import Loader from "../Loader/Loader";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editProduct, setEditProduct] = useState({});

  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn());
    getAllProducts().then((productsAsJson) => {
      let products = [];

      for (let id in productsAsJson) {
        products.push({ ...productsAsJson[id], id });
      }

      setProducts(products);
    });
  }, []);

  const editModeActivationHandler = (productForEditting) => {
    setEditMode(true);
    setEditProduct(productForEditting);
  };

  const editModeCancellationHandler = () => {
    setEditMode(false);
  };

  const addProduct = (product) => {
    const updatedProduct = [...products, product];
    setProducts(updatedProduct);
  };

  const deleteProduct = (id) => {
    const updatedProduct = products.filter((product) => product.id !== id);
    setProducts(updatedProduct);
  };

  return (
    <>
      {products.length === 0 ? (
        <Loader />
      ) : (
        <>
          <h1 className={styles.title}>CATALOG</h1>
          <div className={styles.container}>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                onEdit={editModeActivationHandler}
                onDelete={deleteProduct}
              />
            ))}
          </div>
        </>
      )}

      {isLoggedIn ? (
        <ProductEditor
          edit={editMode}
          product={editProduct}
          onEditCancel={editModeCancellationHandler}
          addProduct={addProduct}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ProductsList;
