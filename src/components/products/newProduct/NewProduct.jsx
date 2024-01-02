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

  const disabled = Object.values(values).some(v => v === "");

  return (
    <>
      <h1 className={styles.title}>Add New Product</h1>
      <div className={styles.container}>
        <form
          onSubmit={onSubmit}
        >
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
          <button className={styles.button} type="submit" disabled={disabled}>
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default NewProduct;
