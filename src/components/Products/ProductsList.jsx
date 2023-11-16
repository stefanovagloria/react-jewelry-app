import { useEffect, useState } from "react";
import styles from './ProductsList.module.css'
import ProductItem from "./ProductItem";
import NewProduct from "./NewProduct";
import { getAllProducts } from "../../services/productService";
import { getAuthToken } from "../../utils";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const authToken = getAuthToken();
    getAllProducts(authToken).then(result => setProducts(result));
  }, []);

  return (
    <>
      <h1 className={styles.title}>LATEST PRODUCTS</h1>
      <div className={styles.container}>
        {products.map((product) => (
          
          <ProductItem key={product._id} product={product}/>
        ))}
      </div>

      <NewProduct />
    </>
  );
};

export default ProductsList;
