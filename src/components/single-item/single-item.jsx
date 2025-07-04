import "./single-item-styles.css";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";
export default function SingleItem({
  searchId,
  currencyExchange,
  AddItemToCart,
}) {
  const [item, setItem] = useState();

  useEffect(() => {
    async function fetchItemData() {
      try {
        const localdata = await fetch(
          `https://dummyjson.com/products/${searchId}`
        );
        const jsonData = await localdata.json();
        setItem(jsonData);
      } catch (error) {
        console.error("Error, cannot take data:", error);
      }
    }
    fetchItemData();
  }, [searchId]);

  function rating(rating) {
    const stars = Array.from({ length: Math.floor(rating) }, (_, index) => (
      <AiFillStar key={index + 1} />
    ));
    if (stars.length < 5) {
      stars.push(<AiOutlineStar key={0} />);
    }
    return <>{stars}</>;
  }

  if (item) {
    return (
      <ReturnItem
        item={item}
        rating={rating}
        currencyExchange={currencyExchange}
        AddItemToCart={AddItemToCart}
      />
    );
  }
}

function ReturnItem({ rating, item, currencyExchange, AddItemToCart }) {
  let localDiscount = (item.price * (100 + item.discountPercentage)) / 100;
  return (
    <div className="container-singleItem">
      <div className="colored-border"></div>
      <div className="window-singleItem">
        <div className="header-singleItem">Category: {item.category}</div>
        <div className="body-singleItem">
          <div className="body-left-singleItem">
            <div className="img-singleItem">
              <img alt={item.title} src={item.thumbnail} />
            </div>
          </div>
          <div className="body-right-singleItem">
            <div className="right-header-sigleItem">
              <div className="title-sigleItem">{item.title}</div>
              <div className="colorful-border"></div>
            </div>
            <div className="right-body-sigleItem">
              <div className="right-body-price-sigleItem">
                <div className="price-head-sigleItem">
                  <span>Brand: {item.brand}</span>
                </div>
                <div className="price-body-sigleItem">
                  <span className="current-price-body">
                    {currencyExchange(item.price)}
                  </span>
                  <span className="discount-price-body">
                    {currencyExchange(localDiscount)}
                  </span>
                  <span className="percent-price-body">
                    {item.discountPercentage} % lower
                  </span>
                </div>
                <div className="price-footer-sigleItem">
                  <span className="stars-sigleItem">{rating(item.rating)}</span>
                  <span className="rating-number-sigleItem">
                    {item.rating}/5
                  </span>
                </div>
              </div>
              <div className="right-body-cart-sigleItem">
                <div className="icon-sigleItem">
                  <FiShoppingCart onClick={() => AddItemToCart(item.id)} />
                </div>
                <div className="stock-sigleItem">
                  <span>{item.stock}</span>
                  <span>left</span>
                </div>
              </div>
            </div>
            <div className="right-footer-sigleItem">
              <div className="colorful-border"></div>
            </div>
          </div>
        </div>
        <div className="footer-singleItem">
          <span>{item.description}</span>
        </div>
      </div>
      <div className="colored-border"></div>
    </div>
  );
}
