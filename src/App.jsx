import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("fetching");
    fetch("http://localhost:5000/products")
      .then((response) => {
        const body = response.json();
        console.log(body);
        return body;
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.name}
          imageUrl="https://m.media-amazon.com/images/I/610NdWdTLiL._SL1500_.jpg"
          productName={product.name}
          price={product.price}
        />
      ))}
    </>
  );
}

export default App;
