import "./styles-cart.css"
import { useEffect, useState } from "react";
import OrderSummary from "./cart-order-summary";
import ListItems from "./cart-list-items";
export default function Cart({ CartItems, currencyExchange}) {
    const [CartData, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDiscount, setDiscount] = useState(0);

    useEffect(() => {
        async function fetchAllItemData() {
            const fetchedData = await Promise.all(
                CartItems.map((item) => fetchItemData(item))
            );
            setCart(fetchedData.filter((data) => data !== null));
        }
        async function fetchItemData(id) {
            try {
                const localdata = await fetch(
                    `https://dummyjson.com/products/${id}`
                );
                return localdata.json();
            } catch (error) {
                console.error('Error fetching data:', error);
                return null;
            }
        }
        if (CartItems.length > 0) {
            fetchAllItemData();
        }
    }, [CartItems]);

    useEffect(() => {
        function updateTotalPrice() {
            let localPrice = 0;
            let localDiscount = 0;
            for (const item of CartData) {
                localPrice += item.price;
                localDiscount += (((item.price * (100 + item.discountPercentage)) / 100) - item.price)
            }
            setTotalPrice(localPrice);
            setDiscount(localDiscount.toFixed(2))
            console.log(totalPrice);
        }
        updateTotalPrice();
    }, [CartData, totalPrice]);



    return (
        <div className="container-cart">
            {CartData.length > 0 ? (
                <div className="main-cart">
                    <ListItems currencyExchange={currencyExchange} CartData={CartData}></ListItems>
                    <div className="order-summary">
                        <OrderSummary CartData={CartData} totalDiscount={totalDiscount} totalPrice={totalPrice} ></OrderSummary>
                    </div>
                </div>
            ) : (
                <div className="empty-cart">
                    Cart: Empty. You: Hero. Let’s save the day by adding some goodies!
                </div>
            )}
        </div>
    )
}