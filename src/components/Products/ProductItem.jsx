import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";
import { useEffect, useState } from "react";
import { deleteProduct } from "../../services/productService";
import { getUserId } from "../../utils";

import sampleImg from "../../assets/381074000_781201344013814_821133475041912350_n.jpg";

const ProductItem = ({ product, onEdit, onDelete, onAddToShoppingCard }) => {
  const [loggedInAuthor, setLoggedInAuthor] = useState(false);

  useEffect(() => {

    if (product.creator === getUserId()) {
      setLoggedInAuthor(true);
    }
  }, []);

  return (
    <article className={styles.container}>
      <Link to={`/products/${product.id}`}>
        <div>
          <img className={styles.img} src={sampleImg} alt="NO IMAGE" />
        </div>
        <div>
          <span className={styles.span}>{product.productName}</span>
          <span className={styles.span}> Price {product.price}$ </span>
        </div>
      </Link>
      {loggedInAuthor ? (
        <div>
          <button className={styles.buttons} onClick={() => onEdit(product)}>
            Edit
          </button>
          <button
            className={styles.buttons}
            onClick={() => onDelete(product.id)}
          >
            Delete
          </button>
        </div>
      ) : (
        <div>
          <button
            className={styles.buttons}
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
