import { useEffect } from "react";
import { useProduct} from "../../context/MainContext";
const GetProduct = () => {
   const { product, readProduct, deleteProduct } = useProduct();
  useEffect(() => {
    readProduct();
  }, []);
  return (
    <div>
      {product.data?.map((item) => {
        return (
          <div className="text" key={item._id}>
            <h1 className="h1" >
              {item.q}
            </h1>
            <button
             onClick={() => deleteProduct(item._id)}
              className="deleteBtn"
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default GetProduct;
