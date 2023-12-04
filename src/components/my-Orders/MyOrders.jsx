import { useState, useEffect, useContext } from "react";

import styles from "./MyOrders.module.css";
import { getOrderedProducts } from "../../services/orderService";
import AuthContext from "../../contexts/authContext";

const MyOrders = ({orders, totalAmount}) => {

  const { userUid } = useContext(AuthContext);
  const [completedOrders, setCompletedOrders] = useState([]);

  useEffect(() => {
    getOrderedProducts().then((productsAsJson) => {
      let products = [];
      let totalAmount = 0;
      for (let id in productsAsJson) {
        if (productsAsJson[id].userId === userUid) {
          products.push({ ...productsAsJson[id], id });
          totalAmount += Number(productsAsJson[id].product.price)
        }
      }
      setCompletedOrders(products);
      //setTotalAmount(totalAmount);
    });

  }, []);

  return (
    <div className={styles.container}>
    <div className={styles.CartContainer}>
      <div className={styles.Header}>
        <h3 className={styles.Heading}>Ordered products:</h3>
        {completedOrders.length > 0 && (
          <h3>Orders here..</h3>
        )}
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