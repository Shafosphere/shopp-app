import "./styles.css"
import Navbar from "../navbar/navbar"
import Banner from "../banner/banner"
import ImageCarousel from "../image-carousel/carousel"
import ProductsList from "../products/products"
import SearchResult from "../search-result/search-result"
import SingleItem from "../single-item/single-item"
import { useState } from "react"
import Cart from "../cart/cart"

export default function Main() {

    const [view, setView] = useState("id");
    const [cartItem, setCartItem] = useState([]);
    const [currency, setCurrency] = useState('$');
    const [searchCategory, setCategory] = useState();
    const[searchId, setId] = useState();
    function navigateToView(view, item) {
        setView(view);
        if (item && typeof item === 'object') {
            if ('category' in item) {
                setCategory(item.category);
            }
            if ('id' in item) {
                setId(item.id);
            }
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
                {view === "cart" && <Cart CartItems={cartItem} currencyExchange={currencyExchange} />}
                {view === "search" && <SearchResult
                    currencyExchange={currencyExchange}
                    searchCategory={searchCategory}
                    AddItemToCart={AddItemToCart}
                />}
                {view === "main" && (
                    <>
                        <Banner />
                        <ImageCarousel />
                        <Banner />
                        <ImageCarousel />
                        <ProductsList navigateToView={navigateToView} currencyExchange={currencyExchange} AddItemToCart={AddItemToCart} />
                    </>
                )}
                {view === "id" && (
                    <>
                        <SingleItem searchId={searchId}></SingleItem>
                    </>
                )}
            </div>
        </div>
    );
}