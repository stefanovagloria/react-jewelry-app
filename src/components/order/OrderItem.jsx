import styles from './OrderItem.module.css'

const OrderItem = ({product, onRemove}) => {
console.log(product.product.id)
  return (
    <>
    <tr className={styles.tableRow}>
      <td>{product.product.productName}</td>
      <td className={styles.counter}>
        <span className={styles.decrease}>-</span>
        <span>1</span>
        <span className={styles.increase}>+</span>
      </td>
      <td>{product.product.price} $</td>
      <td onClick={() => onRemove(product.id)} className={styles.remove}>X</td>
    </tr>


   </>
  );
};

export default OrderItem;
