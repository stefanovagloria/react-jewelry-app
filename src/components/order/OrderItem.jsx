import styles from './Order.module.css'

const OrderItem = ({product, onRemove}) => {

    console.log(product.product.id)
  return (
    <>
      <div  className={styles.imageBox}>
        <img src="" />
      </div>
      <div className={styles.about}>
        <h1 className={styles.title}>{product.product.productName}</h1>
        <img src="" />
      </div>
      <div className={styles.counter}>
        <div className={styles.btn}>+</div>
        <div className={styles.count}>1</div>
        <div className={styles.btn}>-</div>
      </div>
      <span className={styles.prices}>
        <div className={styles.amount}>${product.product.price}</div>
        <div className={styles.remove} onClick={() => onRemove(product.product.id)}>
          <u>Remove</u>
        </div>
      </span>
   </>
  );
};

export default OrderItem;
