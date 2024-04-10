import "./styles-navbar.css"
import { FiShoppingCart } from "react-icons/fi";
import { IoTriangle } from "react-icons/io5";

import { PL, US, GB } from 'country-flag-icons/react/3x2'
import { useEffect, useState } from "react";

export default function Navbar({ NavigateToMainPage, NavigateToCart, CartItems }) {
const[categoriesData, setCatData] = useState([]);

    return (
        <div className="container-navbar">
            <div className="top-navbar">

                <div className="title-input-container">
                    {/* title */}
                    <div onClick={NavigateToMainPage} className="title-navbar">SHOPP APP</div>
                    {/* input */}
                    <div className="input-navbar">
                        <input className="input" type="text" placeholder="I want..." />
                    </div>
                </div>

                <div className="money-navbar">
                    {/* currency */}
                    <CurrencyNavbar />
                    {/* cart */}
                    <div onClick={NavigateToCart} className="cart-navbar">
                        <FiShoppingCart /> {CartItems}
                    </div>
                </div>

            </div>


            <div className="bot-navbar">
                <CategoriesNavbar/>
                <div className="categories-list">
                    <div className="">smartphones </div>
                    <div className="">laptops</div>
                    <div className="">SKINCARE</div>
                    <div className="">furniture</div>
                </div>

            </div>

        </div>
    )
}


function CategoriesNavbar() {
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
                <div onMouseOver={handleMenuClick} onMouseOut={handleMouseOut} className="category-menu">
                    one
                </div>
            )}
        </div>
    )
}

function CurrencyNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function handleMenuClick() {
        setIsMenuOpen(true);
    }
    function handleMouseOut() {
        setIsMenuOpen(false);
    }
    return (
        <div className="currency-navbar">
            <div className="currency-top">
                <PL className="currency-flag" />
                <span className="currency-text">PLN / PL</span>
            </div>
            <div className="currency-bot" onMouseOver={handleMenuClick}>
                <IoTriangle className="currency-icon" />
            </div>
            {isMenuOpen && (
                <div onMouseOver={handleMenuClick} onMouseOut={handleMouseOut} className="currency-menu">
                    <div className="currency-menu-window">
                        <div className="currency-menu-items">
                            <PL className="currency-flag" />
                            <span className="currency-text">PLN / PL</span>
                        </div>
                        <div className="currency-menu-items">
                            <US className="currency-flag" />
                            <span className="currency-text">USD / US</span>
                        </div>
                        <div className="currency-menu-items">
                            <GB className="currency-flag" />
                            <span className="currency-text">GBP / GB</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}