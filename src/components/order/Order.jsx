import { useContext, useState } from "react";
import styles from "./Order.module.css";
import { useEffect } from "react";
import {
  deleteOrderedProduct,
  getOrderedProducts,
  updateOrderedProduct,
} from "../../services/orderService";

import AuthContext from "../../contexts/authContext";

import OrderItem from "./OrderItem";

const Order = () => {
  const { userUid } = useContext(AuthContext);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    getOrderedProducts().then((productsAsJson) => {
      let products = [];
      let totalAmount = 0;
      for (let id in productsAsJson) {
        if (
          productsAsJson[id].userId === userUid &&
          productsAsJson[id].isCompleted === false
        ) {
          products.push({ ...productsAsJson[id], id });
          totalAmount += Number(productsAsJson[id].product.price);
        }
      }
      setOrderedProducts(products);
      setTotalAmount(totalAmount);
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

    const productPrice = orderedProducts.find((p) => p.id === productId).product
      .price;
    setTotalAmount(totalAmount - productPrice);

    const updatedProducts = orderedProducts.filter(
      (product) => product.id !== productId
    );
    setOrderedProducts(updatedProducts);
  };

  const checkOut = async () => {
    for (const product of orderedProducts) {
      const updatedResult = await updateOrderedProduct(product.id);
    }

    setOrderedProducts([]);
    setTotalAmount(0);
  };

  return (
    <>
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
              <table>
                <thead className={styles.tableHead}>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                {orderedProducts.map((product) => (
                <OrderItem
                  key={product.id}
                  product={product}
                  onRemove={removeProduct}
                />
              ))}
                </tbody>
              </table>
             

              <div className={styles.checkout}>
                <div className={styles.total}>
                  <div>
                    <div className={styles.Subtotal}>Total amount:</div>
                  </div>
                  <div className={styles.totalAmount}>${totalAmount}</div>
                </div>
                <button className={styles.button} onClick={checkOut}>
                  Checkout
                </button>
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
    </>
  );
};

export default Order;
