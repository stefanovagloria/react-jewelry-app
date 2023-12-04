import styles from "./MyOrders.module.css";

const MyOrders = ({orders, totalAmount}) => {



  return (
    <div className={styles.container}>
    <div className={styles.CartContainer}>
      <div className={styles.Header}>
        <h3 className={styles.Heading}>Ordered products:</h3>
        {orders.length > 0 && (
          <h3>Orders here..</h3>
        )}
      </div>
      {orders.length === 0 && (
        <div>
          <div className={styles.emptyCart}>No orders!</div>
        </div>
      )}
    </div>
    </div>
  );
};

export default MyOrders;