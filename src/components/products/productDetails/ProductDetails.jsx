import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../services/productService";
import styles from "./ProductDetails.module.css";
import sampleImg from "../../../assets/381074000_781201344013814_821133475041912350_n.jpg";
import AuthContext from "../../../contexts/authContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { userUid } = useContext(AuthContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(id).then((product) => setProduct(product));
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.img} src={sampleImg} alt="No image" />
      </div>
      <div className={styles.productInfo}>
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
        {product.creator !== userUid && (
           <div>
           <button
             className={styles.buyBtn}
             onClick={() => onAddToShoppingCard({ ...product })}
           >
             Buy
           </button>
         </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
