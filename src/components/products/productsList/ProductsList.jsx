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
import ProductContext, { ProductProvider } from "../../../contexts/productContext";

const ProductsList = () => {
  const { userUid } = useContext(AuthContext);

  const {products, isLoggedIn, editMode, editProduct,editModeActivationHandler,editModeCancellationHandler,
    onEditProduct,onCreateProduct} = useContext(ProductContext);


  return (
    <ProductProvider>
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
                onDelete={deleteProduct}
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
    </ProductProvider>
  );
};

export default ProductsList;
