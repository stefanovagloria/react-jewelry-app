import { useContext, useState } from "react";
import styles from "./Order.module.css";
import { useEffect } from "react";
import {
  deleteOrderedProduct,
  getOrderedProducts,
} from "../../services/orderService";

import AuthContext from "../../contexts/authContext";

import OrderItem from "./OrderItem";

const Order = () => {
  const { userUid } = useContext(AuthContext);
  const [orderedProducts, setOrderedProducts] = useState([]);

  useEffect(() => {
    getOrderedProducts().then((productsAsJson) => {
      let products = [];

      for (let id in productsAsJson) {
        if (productsAsJson[id].userId === userUid) {
          products.push({ ...productsAsJson[id], id });
        }
      }
      setOrderedProducts(products);
    });
  }, []);

  const removeAllProducts = async () => {
    for (let product in orderedProducts) {
      const id = orderedProducts[product].id;
      await deleteOrderedProduct(id);
    }
    setOrderedProducts([]);
  };

  const removeProduct = async (productId) => {
    await deleteOrderedProduct(productId);
    const updatedProducts = orderedProducts.filter(
      (product) => product.id !== productId
    );
    setOrderedProducts(updatedProducts);
  };

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
            {orderedProducts.map((product) => (
              <OrderItem
                key={product.id}
                product={product}
                onRemove={removeProduct}
              />
            ))}

            <div className={styles.checkout}>
              <div className={styles.total}>
                <div>
                  <div className={styles.Subtotal}>Total amount:</div>
                </div>
                <div className={styles.totalAmount}>${}</div>
              </div>
              <button className={styles.button}>Checkout</button>
            </div>
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
