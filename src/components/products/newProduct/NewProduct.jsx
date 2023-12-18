import useForm from "../../../hooks/useForm";

import styles from "./NewProduct.module.css";

const ProductKeys = {
  ProductName: "productName",
  Price: "price",
  Category: "category",
  Description: "description",
};

const NewProduct = ({ onCreate }) => {

  const { values, onChange, onSubmit } = useForm(
    {
      [ProductKeys.ProductName]: "",
      [ProductKeys.Price]: "",
      [ProductKeys.Category]: "",
      [ProductKeys.Description]: "",
    },
    onCreate,
  
  );

  return (
    <>
      <h1 className={styles.title}>Add New Product</h1>
      <div className={styles.container}>
        <form
          onSubmit={onSubmit}
        >
          <div>
            <input
              className={styles.input}
              name="productName"
              value={values[ProductKeys.ProductName]}
              onChange={onChange}
              placeholder="Product name"
            />
            <input
              className={styles.input}
              name="price"
              value={values[ProductKeys.Price]}
              onChange={onChange}
              placeholder="Price"
            />
            <input
              className={styles.input}
              name="category"
              value={values[ProductKeys.Category]}
              onChange={onChange}
              placeholder="Category"
            />
            <textarea
              className={styles.input}
              name="description"
              value={values[ProductKeys.Description]}
              onChange={onChange}
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
