import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/authContext";

import styles from "./ProductItem.module.css";
import sampleImg from "../../../assets/381074000_781201344013814_821133475041912350_n.jpg";

const ProductItem = ({ product, onEdit, onDelete, onAddToShoppingCard }) => {
  const { userUid, isAuthenticated } = useContext(AuthContext);
  
  return (
    <article className={styles.container}>
      <Link to={`/products/${product.id}`} className={styles.link}>
        <div>
          <img className={styles.img} src={sampleImg} alt="NO IMAGE" />
        </div>
        <div>
          <span className={styles.span}>{product.productName}</span>
          <span className={styles.span}> Price {product.price}$ </span>
        </div>
      </Link>
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
      ) }
      {isAuthenticated !== null && product.creator !== userUid &&(
        <div>
          <button
            className={styles.buyBtn}
            onClick={() => onAddToShoppingCard({ ...product })}
          >
            Buy
          </button>
        </div>
      )} 
    </article>
  );
};

export default ProductItem;
