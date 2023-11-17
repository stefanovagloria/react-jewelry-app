import { useEffect, useState } from "react";
import styles from './ProductsList.module.css'
import ProductItem from "./ProductItem";
import NewProduct from "./NewProduct";
import { getAllProducts } from "../../services/productService";
import { isUserLoggedIn } from "../../utils";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn());
    getAllProducts().then(productsAsJson => {
      let products = [];

          for (let id in productsAsJson) {
            products.push({ ...productsAsJson[id], id });
          }

          setProducts(products);
        }
    )},[])

  return (
    <>
      <h1 className={styles.title}>LATEST PRODUCTS</h1>
      <div className={styles.container}>
        {products.map((product) => (
          
          <ProductItem key={product.id} product={product}/>
        ))}
      </div>
      {isLoggedIn ? 
      <NewProduct /> : ''
    }
      
    </>
  );
};

export default ProductsList;
