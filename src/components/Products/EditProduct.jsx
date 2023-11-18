import { useState } from "react";

import styles from "./EditProduct.module.css";
import { createProduct, editProduct } from "../../services/productService";
import { getAuthToken, getUserId } from "../../utils";

const EditProduct = ({product, onEditCancel} ) => {

  const [productName, setProductName] = useState(product.productName);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [description, setDescription] = useState(product.description);

  const productNameChangeHandler = (e) => {
    setProductName(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = async (e) => {
    console.log('Editting')
    e.preventDefault();
    const creator = getUserId();
    const createdProduct = await editProduct(product.id, {
      productName,
      price,
      category,
      description,
      creator,
    });

    console.log(createdProduct);
  };

  return (
    <>
      <h1 className={styles.title}>Edit Product</h1>
      <div className={styles.container}>
        <form onSubmit={submitHandler}>
          <div>
            <input
              className={styles.input}
              value={productName}
              onChange={productNameChangeHandler}
              placeholder={product.productName}
            />
            <input
              className={styles.input}
              value={price}
              onChange={priceChangeHandler}
              placeholder={product.price}
            />
            <input
              className={styles.input}
              value={category}
              onChange={categoryChangeHandler}
              placeholder={product.category}
            />
            <textarea
              className={styles.input}
              value={description}
              onChange={descriptionChangeHandler}
              placeholder={product.description}
            />
          </div>
          <button className={styles.button} type="submit">
            Save Changes
          </button>
          <button className={styles.button}  onClick={onEditCancel}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
