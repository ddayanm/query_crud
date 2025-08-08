import PostProduct from "../components/pages/PostProduct";
import GetProduct from "../components/pages/GetProduct";
import { Route, Routes } from "react-router-dom";
// import { createContext, useContext, useState } from "react";
import axios from "axios";
const MainRoutes = () => {
  const route = [
    {
      link: "/post",
      element: <PostProduct />,
    },
    {
      link: "/get",
      element: <GetProduct />,
    },
  ];

  return (
    <Routes>
      {route.map((item, index) => (
        <Route key={index} path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
