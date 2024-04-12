import "./styles.css"
import Navbar from "../navbar/navbar"
import Banner from "../banner/banner"
import ImageCarousel from "../image-carousel/carousel"
import ProductsList from "../products/products"
import SearchResult from "../search-result/search-result"
import { useState } from "react"
import Cart from "../cart/cart"

export default function Main() {

    const [view, setView] = useState("main");

    const [cartItem, setCartItem] = useState([]);
    const [currency, setCurrency] = useState('$');
    const [searchItem, setItem] = useState();

    function navigateToView(view, item) {
        setView(view);
        if (item) {
            setItem(item);
        }
    }
    function currencyExchange(item) {
        let convertedItem;
        switch (currency) {
            case '£':
                convertedItem = (item * 0.8).toFixed(2);
                break;
            case 'zł':
                convertedItem = (item * 4).toFixed(2);
                break;
            default:
                convertedItem = item.toFixed(2);
        }
        return `${convertedItem} ${currency}`;
    }
    function switchCurrency(item) {
        setCurrency(item);
    }

    function AddItemToCart(item) {
        setCartItem(prevCart => [...prevCart, item]);
    }
    return (
        <div className="container kantumruy">
            <div className="main-window">
                <Navbar
                    currency={currency}
                    NavigateToView={navigateToView}
                    switchCurrency={switchCurrency}
                    CartItems={cartItem.length}
                />
                <div className="underNavbar" />
                {view === "cart" && <Cart CartItems={cartItem} currencyExchange={currencyExchange}/>}
                {view === "search" && <SearchResult
                    currencyExchange={currencyExchange}
                    searchItem={searchItem}
                    AddItemToCart={AddItemToCart}
                />}
                {view === "main" && (
                    <>
                        <Banner />
                        <ImageCarousel />
                        <Banner />
                        <ImageCarousel />
                        <ProductsList currencyExchange={currencyExchange} AddItemToCart={AddItemToCart} />
                    </>
                )}
            </div>
        </div>
    );
}