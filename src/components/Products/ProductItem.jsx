import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  return (
    <article className={styles.box}>
      <Link to={`/products/${product.id}`} >
        <div>
          <img
            className={styles.img}
            alt="NO IMAGE"
          />
        </div>
        <div>
          <span className={styles.span}>{product.productName}</span>
          <span className={styles.span}> Price${product.price} </span>
        </div>
      </Link>
    </article>
  );
};

export default ProductItem;
