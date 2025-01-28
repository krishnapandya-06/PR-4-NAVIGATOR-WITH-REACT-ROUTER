import React from "react";
import { Link, Outlet } from "react-router-dom";

function Product() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description : "This is Prroduct 1.",
      price : " 2.99 $",
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 2,
      name: "Product 2",
      description : "This is Product 2.",
      price : "6.99$",
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 3,
      name: "Product 3",
      description : "This is Product 3.",
      price : "12.00$",
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 4,
      name: "Product 4",
      description : "This is Product 4 .",
      price : "9.00$",
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 5,
      name: "Product 5",
      description : "This is Product 5.",
      price : "8.79 $",
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 6,
      name: "Product 6",
      description : "This is Product 6.",
      price : "56$",
      image: "https://via.placeholder.com/200x200",
    },
  ];

  return (
    <div className="page products">
      <h1>Products</h1>
      <div className="products-container">
        <div className="products-list">
          <h2>Product List</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-box">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <Link to={`/products/${product.id}`} className="product-link">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="product-details">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Product;

