import { useState, useEffect, useContext } from "react";

import styles from "./MyOrders.module.css";
import { getOrderedProducts } from "../../services/orderService";
import AuthContext from "../../contexts/authContext";

const MyOrders = () => {
  const { userUid } = useContext(AuthContext);
  const [completedOrders, setCompletedOrders] = useState([]);

  console.log(userUid);
  useEffect(() => {
    getOrderedProducts().then((productsAsJson) => {
      let products = [];
      let totalAmount = 0;
      for (let id in productsAsJson) {
        if (
          productsAsJson[id].userId === userUid &&
          productsAsJson[id].isCompleted === true
        ) {
          products.push({ ...productsAsJson[id], id });
          totalAmount += Number(productsAsJson[id].product.price);
        }
      }
      setCompletedOrders(products);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.CartContainer}>
        <div className={styles.Header}>
          <h3 className={styles.Heading}>Ordered products:</h3>
        </div>
        <div>
            {completedOrders.map((product) => (
              <div className={styles.products} key={product.id}>
              {product.product.productName} - {product.product.price} $
              </div>
            ))}
          </div>
        {completedOrders.length === 0 && (
          <div>
            <div className={styles.emptyCart}>No orders!</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
