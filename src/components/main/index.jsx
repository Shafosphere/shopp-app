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
        if(item){
            setItem(item);
        }
    }

    function AddItemToCart(item) {
        setCartItem(prevCart => [...prevCart, item]);
    }
    return (
        <div className="container kantumruy">
            <div className="main-window">
                <Navbar
                    NavigateToView={navigateToView}
                    CartItems={cartItem.length}
                />
                <div className="underNavbar" />
                {view === "cart" && <Cart CartItems={cartItem} />}
                {view === "search" && <SearchResult searchItem={searchItem} AddItemToCart={AddItemToCart}/>}
                {view === "main" && (
                    <>
                        <Banner />
                        <ImageCarousel />
                        <Banner />
                        <ImageCarousel />
                        <ProductsList AddItemToCart={AddItemToCart} />
                    </>
                )}
            </div>
        </div>
    );
}