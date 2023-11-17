import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";
import { useEffect, useState } from "react";
import { deleteProduct } from "../../services/productService";
import { getUserId } from "../../utils";

const ProductItem = ({ product }) => {

  const [loggedInAuthor, setLoggedInAuthor] = useState(false);

  useEffect(() =>{

    if(product.creator === getUserId()){
      setLoggedInAuthor(true);
    }
  },[])

  const deleteItem = (id) =>{
    deleteProduct(id);
  }

  return (
    <article className={styles.box}>
      <Link to={`/products/${product.id}`} >
        <div>
          <img
            className={styles.img}
            src="../../assets/5.jpg"
            alt="NO IMAGE"
          />
        </div>
        <div>
          <span className={styles.span}>{product.productName}</span>
          <span className={styles.span}> Price${product.price} </span>
        </div>
      </Link>
      {loggedInAuthor ? 
        <div>
        <button>Edit</button>
        <button onClick={ () => deleteItem(product.id)}>Delete</button>
      </div> : ''
      }
    </article>
  );
};

export default ProductItem;
