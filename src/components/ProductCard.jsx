/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const ProductCard = ({ imageUrl, productName, price }) => {
  return (
    <div className="card" style={{ height: "500px", width: "350px" }}>
      <img src={imageUrl} className="card-img-top" alt="Product Image" />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">Rs. {price.toFixed(2)}</p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
