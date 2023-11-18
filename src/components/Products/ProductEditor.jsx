import  EditProduct  from "./EditProduct";
import  NewProduct  from "./NewProduct";

const ProductEditor = ({ edit, product, onEditCancel, addProduct }) => {
  return <>{edit ? <EditProduct product={product} onEditCancel={onEditCancel} /> : <NewProduct addProduct={addProduct}/>}</>;
};

export default ProductEditor;
