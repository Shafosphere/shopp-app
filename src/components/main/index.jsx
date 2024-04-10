import "./styles.css"
import Navbar from "../navbar/navbar"
import Banner from "../banner/banner"
import ImageCarousel from "../image-carousel/carousel"
import ProductsList from "../products/products"
import { useState } from "react"
import Cart from "../cart/cart"

export default function Main() {
    const [displayCart, setDisplayCart] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [currency, setCurrency] = useState('$')

    function NavigateToCart() {
        setDisplayCart(true);
    }
    function NavigateToMainPage() {
        setDisplayCart(false);
    }
    function AddItemToCart(item) {
        setCartItem(prevCart => [...prevCart, item]);
    }
    return (
        <div className="container kantumruy">
            <div className="main-window">
                <Navbar
                    NavigateToMainPage={NavigateToMainPage}
                    NavigateToCart={NavigateToCart}
                    CartItems={cartItem.length}
                />
                <div className="underNavbar"/>
                {displayCart ? (
                    <Cart CartItems={cartItem}/>
                ) : (
                    <>
                        <Banner />
                        <ImageCarousel />
                        <Banner />
                        <ImageCarousel />
                        <ProductsList AddItemToCart={AddItemToCart}/>
                    </>
                )}
            </div>
        </div>
    );
}
