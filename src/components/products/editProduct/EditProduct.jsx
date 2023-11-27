import styles from "./EditProduct.module.css";
import useForm from "../../../hooks/useForm";

const ProductKeys = {
  ProductName: "productName",
  Price: "price",
  Category: "category",
  Description: "description",
};

const EditProduct = ({ product, onEditCancel, onEdit }) => {
  const { values, onChange, onSubmit } = useForm(
    {
      [ProductKeys.ProductName]: product.productName,
      [ProductKeys.Price]: product.price,
      [ProductKeys.Category]: product.category,
      [ProductKeys.Description]: product.description,
    },
    onEdit
  );

  return (
    <>
      <h1 className={styles.title}>Edit Product</h1>
      <div className={styles.container}>
        <form onSubmit={(e) => onSubmit(e,product.id)}>
          <div>
            <input
              className={styles.input}
              name="productName"
              value={values[ProductKeys.ProductName]}
              onChange={onChange}
              placeholder={product.productName}
            />
            <input
              className={styles.input}
              name="price"
              value={values[ProductKeys.Price]}
              onChange={onChange}
              placeholder={product.price}
            />
            <input
              className={styles.input}
              name="category"
              value={values[ProductKeys.Category]}
              onChange={onChange}
              placeholder={product.category}
            />
            <textarea
              className={styles.input}
              name="description"
              value={values[ProductKeys.Description]}
              onChange={onChange}
              placeholder={product.description}
            />
          </div>
          <button className={styles.button} type="submit">
            Save
          </button>
          <button className={styles.button} onClick={onEditCancel}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
