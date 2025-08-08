// import PostProduct from "../components/pages/PostProduct";
// import GetProduct from "../components/pages/GetProduct";
// import { Route, Routes } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import axios from "axios";
const productContext = createContext();
export const useProduct = () => useContext(productContext);

const MainContext = ({children}) => {
  const BASE_URL = "https://api-crud.elcho.dev/api/v1/a38b8-910d4-af507/q";

  const [product, setProduct] = useState([]);

  async function addProduct(newProduct) {
    await axios.post(BASE_URL, newProduct);
  }

  async function readProduct() {
    const { data } = await axios.get(BASE_URL);
    setProduct(data);
  }

  async function deleteProduct(id) {
    const deleteURL = `${BASE_URL}/${id}`;
    await axios.delete(deleteURL);
    readProduct();
  }
  const values = { addProduct, readProduct, deleteProduct, product };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default MainContext;
