import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const results = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Error", error.message);
      });
    dispatch(setProducts(results.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};

export default ProductListing;
