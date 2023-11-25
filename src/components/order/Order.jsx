import { useState } from "react";
import styles from "./Order.module.css";
import { useEffect } from "react";

const Order = () => {
  const [orderedProducts, setOrderedProducts] = useState([]);

  useEffect(() =>{
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
            <div className={styles.Cart-Items}>
            {orderedProducts.map((product) => <>
                <div class="image-box">
            <img src="" />
          </div>
          <div class="about">
            <h1 class="title">{ product.productName }</h1>
            <img src="" />
          </div>
          <div class="counter">
            <div class="btn">+</div>
            <div class="count">2</div>
            <div class="btn">-</div>
          </div>
          <div class="prices">
            <div class="amount">${ product.price }</div>
            <div class="remove" onClick={removeProduct(product.id)}>
              <u>Remove</u>
            </div>
          </div>

            </>)}
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
