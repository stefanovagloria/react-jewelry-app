import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/authContext";

import styles from "./ProductItem.module.css";
import sampleImg from "../../../assets/381074000_781201344013814_821133475041912350_n.jpg";

const ProductItem = ({ product, onEdit, onDelete, onAddToShoppingCard }) => {
  const [onHover, setOnHover] = useState(false);
  const { userUid, isAuthenticated } = useContext(AuthContext);

  const onMouseHandler = () => {
    setOnHover(true);
  };

  const onMouseLeave = () => {
    setOnHover(false);
  };

  return (
    <article
      className={styles.container}
      onMouseEnter={onMouseHandler}
      onMouseLeave={onMouseLeave}
    >
      <Link to={`/products/${product.id}`} className={styles.link}>
        <div>
          <img className={styles.img} src={sampleImg} alt="NO IMAGE" />
        </div>
        <div>
          <span className={styles.span}>{product.productName}</span>
          <span className={styles.span}> {product.price}$ </span>
        </div>
      </Link>
      {onHover && (
        <>
          {isAuthenticated !== null && product.creator === userUid && (
            <div>
              <button className={styles.buyBtn} onClick={() => onEdit(product)}>
                Edit
              </button>
              <button
                className={styles.buyBtn}
                onClick={() => onDelete(product.id, product.productName)}
              >
                Delete
              </button>
            </div>
          )}
          {isAuthenticated !== null && product.creator !== userUid && (
            <div>
              <button
                className={styles.buyBtn}
                onClick={() => onAddToShoppingCard({ ...product })}
              >
                Buy
              </button>
            </div>
          )}
        </>
      )}
    </article>
  );
};

export default ProductItem;
