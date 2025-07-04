import { useEffect, useState } from "react";
import "./products.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export default function ProductsList({
  AddItemToCart,
  currencyExchange,
  navigateToView,
}) {
  const [items, setItems] = useState();

  useEffect(() => {
    fetchItemData();
  }, []);

  async function fetchItemData() {
    try {
      const localdata = await fetch("https://dummyjson.com/products?limit=12");
      const jsonData = await localdata.json();
      setItems(jsonData);
    } catch (error) {
      console.error("Error, cannot take data:", error);
    }
  }

  function rating(rating) {
    const stars = Array.from({ length: Math.floor(rating) }, (_, index) => (
      <AiFillStar key={index + 1} />
    ));
    if (stars.length < 5) {
      stars.push(<AiOutlineStar key={0} />);
    }
    return <>{stars}</>;
  }

  function Elements() {
    if (items) {
      return (
        <div className="products-list">
          {items.products.map((item, index) => (
            <div key={index} className="items-container">
              <div className="item-top">
                <img
                  onClick={() => navigateToView("id", { id: item.id })}
                  alt={item.title}
                  src={item.thumbnail}
                />
                <div className="item-top-bot">
                  <div className="item-top-triangle"></div>
                  <div className="top-discount">
                    {Math.floor(item.discountPercentage)}%
                  </div>
                  <div className="top-stocks">
                    <span className="card-padding">cheaper</span>
                    <span className="card-padding">{item.stock} left</span>
                  </div>
                </div>
              </div>
              <div className="item-bot">
                <div className="item-bot-top">
                  <div className="left-cart">
                    <div className="left-cart-top">
                      <span className="card-padding">{item.title}</span>
                    </div>
                    <div className="left-cart-bot">
                      <div className="card-padding">{rating(item.rating)}</div>
                    </div>
                  </div>
                  <div className="right-cart">
                    <span
                      onClick={() => AddItemToCart(item.id)}
                      className="cart-icon"
                    >
                      <FiShoppingCart />
                    </span>
                  </div>
                </div>

                <div className="item-bot-bottom">
                  <span className="card-padding">
                    {currencyExchange(item.price)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  }

  return (
    <div className="container-products">
      <div className="main-products">
        <div className="products-top">
          <span className="products-menu">
            {" "}
            list <GiHamburgerMenu />{" "}
          </span>
        </div>
        <div className="products-bot">
          <Elements />
        </div>
      </div>
    </div>
  );
}
