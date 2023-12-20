import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {getAllProductsThunk} from "../Data/productThunk";

import "./App.css";
import Header from "./Header";

import ProductsList from "./ProductsList";


const Main = () => {



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, []);

  return (
    <div className="mainPage">
      <Header />
      <div className="productList">
      <ProductsList />
      </div>
     
    </div>
  );
};

export default Main;
