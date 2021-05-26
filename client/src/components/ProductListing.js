import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Product from "./Product";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
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
    // eslint-disable-next-line
  }, []);

  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};

export default ProductListing;
