import styles from './Order.module.css'

const OrderItem = ({product, onRemove}) => {

  return (
    <>
    <div className={styles.itemContainer}>
      <div className={styles.about}>
        <h1 className={styles.title}>{product.product.productName}</h1>
        <img src="" />
      </div>
      <div className={styles.counter}>
        <div className={styles.btn}>-</div>
        <div className={styles.count}>1</div>
        <div className={styles.btn}>+</div>
      </div>
      <span className={styles.prices}>
        <div className={styles.amount}>${product.product.price}</div>
        <div className={styles.remove} onClick={() => onRemove(product.id)}>
          <u>Remove</u>
        </div>
      </span>
      </div> 
   </>
  );
};

export default OrderItem;
