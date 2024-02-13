import styles from './Order.module.css'

const OrderItem = ({product, onRemove}) => {

  return (
    <>
    <tr>
      <td>{product.product.productName}</td>
      <td>- 1 +</td>
      <td>${product.product.price}</td>
    </tr>


   </>
  );
};

export default OrderItem;
