import { FaCheckSquare, FaRegSquare  } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
export default function ListItems({CartStatus ,CartData, currencyExchange, RemoveItemFromCart, ChangeItemStatus}) {

    function getCartItems(price, brand, description, thumbnail, title, index) {
        return (
            <div className="cart-item">
                <div onClick={() => ChangeItemStatus(index)} className="cart-check">
                    {CartStatus[index]?.Active ? <FaCheckSquare /> : <FaRegSquare  />}
                </div>
                <div className="cart-content">
                    <div className="cart-content-top">
                        <div className="cart-content-top-left">
                            <div className="cart-image">
                                <img alt={title} src={thumbnail} />
                            </div>
                            <div className="cart-data">
                                <div className="cart-data-top">
                                    <span className="cart-data-price">{currencyExchange(price)}</span>
                                    <span className="cart-data-title">{title}</span>
                                    <span className="cart-data-brand">by: {brand}</span>
                                </div>

                                <div className="check-gift">
                                    <span className="gift-icon"><FaCheckSquare /></span>
                                    <span>Order as a gift</span>
                                </div>
                            </div>
                        </div>

                        <div onClick={() => RemoveItemFromCart(index)} className="cart-trash">
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
    return (
        <div className="cart-list">
            {CartData.map((item, index) => (
                <div key={index}>
                    {getCartItems(item.price, item.brand, item.description, item.thumbnail, item.title, index)}
                </div>
            ))}
        </div>
    )
}