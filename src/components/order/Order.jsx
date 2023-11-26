import { useState } from "react";
import styles from "./Order.module.css";
import { useEffect } from "react";
import { getOrderedProducts } from "../../services/orderService";

import OrderItem from './OrderItem'

const Order = () => {
  const [orderedProducts, setOrderedProducts] = useState([]);

  useEffect(() =>{

    getOrderedProducts()
    .then((productsAsJson) =>{
      let products = [];

      for (let id in productsAsJson) {
        products.push({ ...productsAsJson[id], id });
      }

      console.log(products)
      setOrderedProducts(products);
    });


    // to fetch all ordered products and to filter these, which are corresponding 
    // for the current userUiD, extracted from AuthContext
  },[])

  const removeAllProducts = () => {

  };

  const removeProduct = (productId) =>{

  }

  return (
    <div className={styles.container}>
      <div className={styles.CartContainer}>
        <div className={styles.Header}>
          <h3 className={styles.Heading}>Shopping Cart</h3>
          {orderedProducts.length > 0 && (
            <h5 className={styles.Action} onClick={removeAllProducts}>
              Remove all
            </h5>
          )}
        </div>
        {orderedProducts.length > 0 && (
            <div className={styles.CartItems}>
            {orderedProducts.map((product) => 
            <OrderItem key={product.id} product={product} onRemove={removeProduct}  /> )}
            </div>
        )}
        {orderedProducts.length === 0 && (
          <div>
            <div className={styles.emptyCart}>No added products!</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
