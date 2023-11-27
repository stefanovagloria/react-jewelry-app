import  EditProduct  from "../editProduct/EditProduct";
import  NewProduct  from "../newProduct/NewProduct";

const ProductEditor = ({ edit, product, onEditCancel, onEdit, onCreateProduct }) => {
  return <>{edit ? <EditProduct product={product} onEditCancel={onEditCancel} onEdit={onEdit} /> : <NewProduct onCreate={onCreateProduct}/>}</>;
};

export default ProductEditor;
