import "./styles-cart.css"
import { FaCheckSquare, FaRegCheckSquare } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";

export default function Cart({ CartItems }) {



    function getHTMLcode(price, brand, description) {
        return (

            <div className="cart-item">
                <div className="cart-check">
                    <FaCheckSquare />
                </div>
                <div className="cart-content">
                    <div className="cart-content-top">
                        <div className="cart-image">
                            <img src="https://cdn.dummyjson.com/product-images/8/thumbnail.jpg" />
                        </div>
                        <div className="cart-data">
                            <div className="cart-data-top">
                                <span className="cart-data-price">{price}</span>
                                <span className="cart-data-brand">BRAND: {brand}</span>
                            </div>

                            <div className="check-gift">
                                <span className="gift-icon"><FaCheckSquare /></span> <spam>Order as a gift</spam>
                            </div>
                        </div>
                        <div className="cart-trash">
                            <CiTrash />
                        </div>
                    </div>
                    <div className="cart-content-bot">
                        <span className="cart-description">{description}</span>
                    </div>
                </div>
            </div>

        )
    }

    async function getList(id) {
        try {
            const itemData = await fetchItemData(id);
            return getHTMLcode(itemData.price, itemData.brand, itemData.description);
        } catch (error) {
            console.error('Error, cannot fetch or process item data:', error);
        }
    }

    async function fetchItemData(id) {
        try {
            const localdata = await fetch(
                `https://dummyjson.com/products/${id}`
            );
            const jsonData = await localdata.json();
            return jsonData;
        } catch (error) {
            console.error('Error, cannot take data:', error);
        }
    }

    return (
        <div className="container-cart">
            <div className="main-cart">
                <div className="cart-list">
                    {CartItems.map((item, index) => (
                        <div key={index}>
                            {getList(item)}
                        </div>
                    ))}
                </div>
                <div className="order-summary">

                </div>

            </div>
        </div>
    )
}