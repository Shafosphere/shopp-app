export default function OrderSummary({ CartData, totalDiscount, totalPrice, updatePrice }) {

    function orderItem(index, title, price, discount) {
        let priceDiscountBefore = ((price * (100 + discount)) / 100).toFixed(2)
        return (
            <div key={index} className="order-item">
                <div className="order-name">{title}</div>
                <div className="order-price">
                    <span>normal price</span>
                    <span className="dot"></span>
                    <span className="order-price-number">{priceDiscountBefore}</span>
                </div>
                <div className="order-discount">
                    <div className="order-price-discount">{price} $</div>
                </div>
            </div>
        )
    }

    return (
        <div className="order-window">
            <div className="order-title">order summary</div>
            {CartData.map((item, index) => (
                orderItem(index, item.title, item.price, item.discountPercentage)
            ))}
            <div className="order-summary">
                <div className="summary-top">
                    <div className="summary-top-items">
                        <span>TOTAL ({CartData.length} items)</span>
                        <span className="dot"></span>
                        <span>{totalPrice} $</span>
                    </div>
                </div>
                <div className="summary-bot">
                    <span>Saving {totalDiscount} $</span>
                </div>
            </div>
            <div className="order-button-container">
                <div className="order-button">BUY</div>
            </div>
        </div>
    )
}