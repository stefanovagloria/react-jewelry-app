import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(id).then((product) => setProduct(product));
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <img  className={styles.img} src="../../assets/5.jpg" alt="No image" />
        
      </div>
      <div  className={styles.productInfo}>
        <p>{product.category}</p>
        <h2>{product.productName}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          sit cupiditate consequuntur ut ea modi temporibus magnam itaque error,
          accusamus recusandae dolor earum ipsa adipisci unde hic reprehenderit,
          officiis aut.
        </p>
        <div>
          <p>Price: {product.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
