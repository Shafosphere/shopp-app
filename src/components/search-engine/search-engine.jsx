import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function SearchEngine({
  searchTerm,
  AddItemToCart,
  currencyExchange,
  navigateToView,
}) {
  const [localData, setData] = useState();

  useEffect(() => {
    async function fetchItemData() {
      try {
        const localdata = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const jsonData = await localdata.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error, cannot take data:", error);
      }
    }
    fetchItemData();
  }, [searchTerm]);

  if (localData) {
    return (
      <div className="container-search">
        {localData.products.map((item, index) => (
          <Item
            navigateToView={navigateToView}
            AddItemToCart={AddItemToCart}
            currencyExchange={currencyExchange}
            key={index}
            item={item}
            index={index}
          />
        ))}
      </div>
    );
  }
}

function Item({ item, AddItemToCart, currencyExchange, navigateToView }) {
  let localDiscount = (item.price * (100 + item.discountPercentage)) / 100;
  function rating(rating) {
    const stars = Array.from({ length: Math.floor(rating) }, (_, index) => (
      <AiFillStar key={index + 1} />
    ));
    if (stars.length < 5) {
      stars.push(<AiOutlineStar key={0} />);
    }
    return <>{stars}</>;
  }
  return (
    <div className="item-search">
      <div className="left-search">
        <img
          onClick={() => navigateToView("id", { id: item.id })}
          alt={item.title}
          src={item.thumbnail}
        />
      </div>
      <div className="right-search">
        <div className="right-search-top">
          <div className="search-prices ">
            <div className="prices-left ">
              <div className="prices-left-top prices-padding">
                <span>{currencyExchange(item.price)}</span>
              </div>
              <div className="prices-left-bot">
                <div className="prices-discount prices-padding">
                  {currencyExchange(localDiscount)}
                </div>
                <div className="prices-discount-percent">
                  <span className="percent-top">
                    {item.discountPercentage} %
                  </span>
                  <span className="percent-bot">lower</span>
                </div>
              </div>
            </div>
            <div onClick={() => AddItemToCart(item.id)} className="cart-right">
              <FiShoppingCart />
            </div>
          </div>
          <div className="search-names prices-padding">
            <span className="search-title">{item.title}</span>
            <span className="search-brand">Brand: {item.brand}</span>
          </div>
          <div className="search-rating prices-padding">
            <div className="rating-container">
              <div className="search-stars">{rating(item.rating)}</div>
              <div className="rating-number">{item.rating}/5</div>
            </div>
          </div>
        </div>
        <div className="right-search-bot prices-padding">
          <span className="search-description">{item.description}</span>
        </div>
      </div>
    </div>
  );
}
