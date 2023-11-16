import { useState } from "react";

import styles from './NewProduct.module.css'
import { createProduct } from "../../services/productService";
import { getAuthToken, getUserId } from "../../utils";

const NewProduct = () => {

    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

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

    const submitHandler = async (e) =>{
        e.preventDefault();
        const authToken = getAuthToken();
        const creator = getUserId();
       const createdProduct =  await createProduct({productName,price,category,description,creator }, authToken);

        console.log(createdProduct)
    }


  return (
    <>
      <h1 className={styles.title}>Add New Product</h1>
      <div className={styles.container}>
        <form onSubmit={submitHandler}>
          <div>
            <input
              className={styles.input}
              value={productName}
              onChange={productNameChangeHandler}
              placeholder="Product name"
            />
            <input
              className={styles.input}
              value={price}
              onChange={priceChangeHandler}
              placeholder="Price"
            />
            <input
              className={styles.input}
              value={category}
              onChange={categoryChangeHandler}
              placeholder="Category"
            />
             <textarea
              className={styles.input}
              value={description}
              onChange={descriptionChangeHandler}
              placeholder="Description"
            />
          </div>
          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default NewProduct;
