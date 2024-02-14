import styles from './OrderItem.module.css'

const OrderItem = ({product, onRemove}) => {

  return (
    <>
    <tr className={styles.tableRow}>
      <td>{product.product.productName}</td>
      <td className={styles.counter}>
        <span>-</span>
        <span>1</span>
        <span>+</span>
      </td>
      <td>{product.product.price} $</td>
    </tr>


   </>
  );
};

export default OrderItem;
