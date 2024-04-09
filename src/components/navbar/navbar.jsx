import "./styles-navbar.css"
import { FiShoppingCart } from "react-icons/fi";
import { IoTriangle } from "react-icons/io5";

import { PL } from 'country-flag-icons/react/3x2'
import { useState } from "react";

export default function Navbar({NavigateToMainPage, NavigateToCart, CartItems}) {
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
                
            <div className="categories">
                CATEGORIES
            </div>
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
            <div className="currency-bot" onMouseOver={handleMenuClick} onMouseOut={handleMouseOut} >
                <IoTriangle className="currency-icon" />
            </div>
            {isMenuOpen && (
                <div className="currency-menu">
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        
                    </ul>
                </div>
            )}
        </div>
    )
}