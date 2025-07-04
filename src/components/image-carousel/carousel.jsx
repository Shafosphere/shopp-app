import "./style-carousel.css";
import React, { useEffect, useState } from "react";
export default function ImageCarousel({ navigateToView }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const ids = Array.from(
      { length: 6 },
      () => Math.floor(Math.random() * 100) + 1
    );
    Promise.all(
      ids.map((i) =>
        fetch(`https://dummyjson.com/products/${i}`).then((res) => res.json())
      )
    )
      .then((results) => setProducts(results))
      .catch(console.error);
  }, []);

  if (products.length === 0) {
    return <div></div>;
  }

  return (
    <div className="slider">
      <div className="slide-track">
        {products.map((prod) => (
          <div
            className="slide"
            key={prod.id}
            onClick={() => navigateToView("id", { id: prod.id })}
          >
            <img alt={prod.title} src={prod.images[0]} />
          </div>
        ))}
      </div>
    </div>
  );
}
