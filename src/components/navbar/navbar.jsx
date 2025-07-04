import "./styles-navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { IoTriangle } from "react-icons/io5";

import { PL, US, GB } from "country-flag-icons/react/3x2";
import { useEffect, useState } from "react";

export default function Navbar({
  searchTerm,
  handleSearch,
  handleInputChange,
  NavigateToView,
  CartItems,
  switchCurrency,
  currency,
}) {
  const [categoriesData, setCatData] = useState([]);

  useEffect(() => {
    fetchItemData();
  }, []);

  async function fetchItemData() {
    try {
      const localdata = await fetch(
        'https://dummyjson.com/products/category-list'
      );
      const jsonData = await localdata.json();
      setCatData(jsonData);
    } catch (error) {
      console.error("Error, cannot take data:", error);
    }
  }

  return (
    <div className="container-navbar">
      <div className="top-navbar">
        <div className="title-input-container">
          {/* title */}
          <div onClick={() => NavigateToView("main")} className="title-navbar">
            SHOPP APP
          </div>
          {/* input */}
          <div className="input-navbar">
            <form onSubmit={handleSearch}>
              <input
                className="input"
                type="text"
                placeholder="I want..."
                value={searchTerm}
                onChange={handleInputChange}
              />
            </form>
          </div>
        </div>

        <div className="money-navbar">
          {/* currency */}
          <CurrencyNavbar currency={currency} switchCurrency={switchCurrency} />
          {/* cart */}
          <div onClick={() => NavigateToView("cart")} className="cart-navbar">
            <span className="cart-navbar-icon">
              <FiShoppingCart />
            </span>
            <span className="cart-navbar-icon">{CartItems}</span>
          </div>
        </div>
      </div>

      <div className="bot-navbar">
        <CategoriesNavbar
          NavigateToView={NavigateToView}
          categoriesData={categoriesData}
        />
        <div className="categories-list">
          <div
            onClick={() =>
              NavigateToView("search", { category: "smartphones" })
            }
            className=""
          >
            smartphones{" "}
          </div>
          <div
            onClick={() => NavigateToView("search", { category: "laptops" })}
            className=""
          >
            laptops
          </div>
          <div
            onClick={() => NavigateToView("search", { category: "beauty" })}
            className=""
          >
            skincare
          </div>
          <div
            onClick={() => NavigateToView("search", { category: "furniture" })}
            className=""
          >
            furniture
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoriesNavbar({ categoriesData, NavigateToView }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenuClick() {
    setIsMenuOpen(true);
  }
  function handleMouseOut() {
    setIsMenuOpen(false);
  }

  return (
    <div onMouseOver={handleMenuClick} className="categories-navbar">
      CATEGORIES
      {isMenuOpen && (
        <div>
          {categoriesData && (
            <div
              onMouseOver={handleMenuClick}
              onMouseOut={handleMouseOut}
              className="category-menu"
            >
              {categoriesData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => NavigateToView("search", { category: item })}
                  className="category-menu-item"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CurrencyNavbar({ switchCurrency, currency }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenuClick() {
    setIsMenuOpen(true);
  }
  function handleMouseOut() {
    setIsMenuOpen(false);
  }

  function CurrentCurrency() {
    const currencyDetails = {
      "£": { flagComponent: GB, text: "GBP / GB" },
      zł: { flagComponent: PL, text: "PLN / PL" },
      $: { flagComponent: US, text: "USD / US" },
    };

    const { flagComponent: Flag, text } =
      currencyDetails[currency] || currencyDetails["$"];

    return (
      <div className="currency-top">
        <Flag className="currency-flag" />
        <span className="currency-text">{text}</span>
      </div>
    );
  }

  return (
    <div className="currency-navbar">
      <CurrentCurrency></CurrentCurrency>
      <div className="currency-bot" onMouseOver={handleMenuClick}>
        <IoTriangle className="currency-icon" />
      </div>
      {isMenuOpen && (
        <div
          onMouseOver={handleMenuClick}
          onMouseOut={handleMouseOut}
          className="currency-menu"
        >
          <div className="currency-menu-window">
            <div
              onClick={() => switchCurrency("zł")}
              className="currency-menu-items"
            >
              <PL className="currency-flag" />
              <span className="currency-text">PLN / PL</span>
            </div>
            <div
              onClick={() => switchCurrency("$")}
              className="currency-menu-items"
            >
              <US className="currency-flag" />
              <span className="currency-text">USD / US</span>
            </div>
            <div
              onClick={() => switchCurrency("£")}
              className="currency-menu-items"
            >
              <GB className="currency-flag" />
              <span className="currency-text">GBP / GB</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
