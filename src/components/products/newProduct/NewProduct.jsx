import { useState } from "react";
import useForm from "../../../hooks/useForm";
import styles from "./NewProduct.module.css";

const ProductKeys = {
  ProductName: "productName",
  Price: "price",
  Category: "category",
  Description: "description",
};

const NewProduct = ({ onCreate }) => {
  const [showForm, setShowForm] = useState(false);

  const { values, onChange, onSubmit } = useForm(
    {
      [ProductKeys.ProductName]: "",
      [ProductKeys.Price]: "",
      [ProductKeys.Category]: "",
      [ProductKeys.Description]: "",
    },
    onCreate
  );

  const disabled = Object.values(values).some((v) => v === "");

  const showFormHandler = () => {
    console.log('show..')
    setShowForm(true);
  };

  const hideFormHandler = () =>{
    setShowForm(false);
  }

  return (
    <>
      <h1 className={styles.title} onClick={showFormHandler}>
        Add New Product
      </h1>
      {showForm && (
        <div className={styles.modal}>
          <div className={styles.content}>

       
          <div className={styles.container}>
            <form onSubmit={onSubmit}>
              <div>
                <label>Product name:</label>
                <input
                  className={styles.input}
                  name="productName"
                  value={values[ProductKeys.ProductName]}
                  onChange={onChange}
                  placeholder="Product name"
                />
                <label>Price:</label>
                <input
                  className={styles.input}
                  name="price"
                  value={values[ProductKeys.Price]}
                  onChange={onChange}
                  placeholder="Price"
                />
                <label>Category:</label>
                <input
                  className={styles.input}
                  name="category"
                  value={values[ProductKeys.Category]}
                  onChange={onChange}
                  placeholder="Category"
                />
                <label>Description:</label>
                <textarea
                  className={styles.input}
                  name="description"
                  value={values[ProductKeys.Description]}
                  onChange={onChange}
                  placeholder="Description"
                />
              </div>
              <button
                className={styles.button}
                type="submit"
                disabled={disabled}
              >
                Send
              </button>
              <button
                className={styles.button}
                onClick={hideFormHandler}
              >
                Cancel
              </button>
            </form>
          </div>
          </div>
        </div>
       
      )}
    </>
  );
};

export default NewProduct;
