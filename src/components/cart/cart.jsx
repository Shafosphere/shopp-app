import "./styles-cart.css";
import { useEffect, useState } from "react";
import OrderSummary from "./cart-order-summary";
import ListItems from "./cart-list-items";
export default function Cart({
  CartItems,
  currencyExchange,
  RemoveItemFromCart,
}) {
  const [CartData, setCart] = useState([]);
  const [CartStatus, setStatus] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setDiscount] = useState(0);

  useEffect(() => {
    async function fetchAllItemData() {
      const fetchedData = await Promise.all(
        CartItems.map((item) => fetchItemData(item))
      );
      setCart(fetchedData.filter((data) => data !== null));
      const initialCartStatus = fetchedData.map(() => ({
        Active: true,
        Gift: false,
      }));
      setStatus(initialCartStatus);
    }
    async function fetchItemData(id) {
      try {
        const localdata = await fetch(`https://dummyjson.com/products/${id}`);
        return localdata.json();
      } catch (error) {
        console.error("Error fetching data:", error);
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

      for (let i = 0; i < CartData.length; i++) {
        if (CartStatus[i]?.Active) {
          localPrice += CartData[i].price;
          localDiscount +=
            (CartData[i].price * (100 + CartData[i].discountPercentage)) / 100 -
            CartData[i].price;
        }
      }

      setTotalPrice(localPrice);
      setDiscount(localDiscount);
    }

    updateTotalPrice();
  }, [CartData, totalPrice, CartStatus]);

  function ChangeItemStatus(index) {
    const updatedStatus = [...CartStatus];
    updatedStatus[index].Active = !updatedStatus[index].Active;
    setStatus(updatedStatus);
  }

  return (
    <div className="container-cart">
      {CartData.length > 0 ? (
        <div className="main-cart">
          <ListItems
            CartStatus={CartStatus}
            currencyExchange={currencyExchange}
            CartData={CartData}
            RemoveItemFromCart={RemoveItemFromCart}
            ChangeItemStatus={ChangeItemStatus}
          />
          <div className="order-summary">
            <OrderSummary
              currencyExchange={currencyExchange}
              CartStatus={CartStatus}
              CartData={CartData}
              totalDiscount={totalDiscount}
              totalPrice={totalPrice}
            ></OrderSummary>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          Cart: Empty. You: Hero. Let’s save the day by adding some goodies!
        </div>
      )}
    </div>
  );
}
