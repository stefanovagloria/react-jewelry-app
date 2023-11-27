import { useContext, useEffect, useState } from "react";
import styles from "./ProductsList.module.css";
import ProductItem from "../productItem/ProductItem";
import ProductEditor from "../productEditor/ProductEditor";
import {
  getAllProducts,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../../../services/productService";
import { isUserLoggedIn } from "../../../utils";
import Loader from "../../loader/Loader";
import AuthContext from "../../../contexts/authContext";
import { addProduct } from "../../../services/orderService";

const ProductsList = () => {
  const { userUid } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editProduct, setEditProduct] = useState({});

  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn());
    getAllProducts().then((productsAsJson) => {
      let products = [];

      for (let id in productsAsJson) {
        products.push({ ...productsAsJson[id], id });
      }

      setProducts(products);
    });
  }, []);

  const editModeActivationHandler = (productForEditting) => {
    console.log(productForEditting)
    setEditMode(true);
    setEditProduct(productForEditting);
  };

  const editModeCancellationHandler = () => {
    setEditMode(false);
  };

  const onCreateProduct = (product) => {
    createProduct({ ...product, creator: userUid }).then((addedObj) => {
      const newProduct = { ...product, id: addedObj.name, creator: userUid };

      const updatedProduct = [...products, newProduct];

      setProducts(updatedProduct);
    });
  };

  const onEditProduct = (product, productId) => {
  
    const updatedProduct = {...product, id: productId, creator: userUid}
    updateProduct(productId,updatedProduct).then((updatedObj) =>{

      
      const updatedProducts = [...products.filter((p) => p.id !== productId), updatedProduct];
      setProducts(updatedProducts);
    })
    
  };

  const delProduct = (id) => {
    deleteProduct(id);
    const updatedProduct = products.filter((product) => product.id !== id);
    setProducts(updatedProduct);
  };

  const addToShoppingCard = (product) => {
    const orderedProduct = {product: {...product}, userId: userUid, isCompleted: false};

    addProduct(orderedProduct);
  };

  return (
    <>
      {products.length === 0 ? (
        <Loader />
      ) : (
        <>
          <h1 className={styles.title}>CATALOG</h1>
          <div className={styles.container}>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                onEdit={editModeActivationHandler}
                onDelete={delProduct}
                onAddToShoppingCard={addToShoppingCard}
              />
            ))}
          </div>
        </>
      )}

      {isLoggedIn ? (
        <ProductEditor
          edit={editMode}
          product={editProduct}
          onEditCancel={editModeCancellationHandler}
          onEdit={onEditProduct}
          onCreateProduct={onCreateProduct}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ProductsList;
