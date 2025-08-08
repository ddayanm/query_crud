import { useState } from "react";
import {useProduct} from "../../context/MainContext";

const PostProduct = () => {
  const [value, setValue] = useState("");
  const {addProduct} = useProduct()
  
  const handlerClick = () => {
    addProduct({
      q: value,
    });
    setValue("");
  };

  return (
    <div className="wrapper">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="input"
        type="text"
        placeholder="text..."
      />
      <button onClick={handlerClick} className="button">
        create
      </button>
    </div>
  );
};

export default PostProduct;
