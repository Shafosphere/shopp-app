export default function OrderSummary({
  currencyExchange,
  CartData,
  totalDiscount,
  totalPrice,
  CartStatus,
}) {
  const countActiveItems = () => {
    return CartStatus.filter((status) => status.Active).length;
  };

  function orderItem(index, title, price, discount) {
    let priceDiscountBefore = (price * (100 + discount)) / 100;
    let itemClass = CartStatus[index]?.Active
      ? "order-item"
      : "order-item order-name-deactive";

    return (
      <div key={index} className={itemClass}>
        <div className="order-name">{title}</div>
        <div className="order-price">
          <span>normal price</span>
          {/* <span className="dot"></span> */}
          <span className="order-price-number">
            {currencyExchange(priceDiscountBefore)}
          </span>
        </div>
        <div className="order-discount">
          <div className="order-price-discount">{currencyExchange(price)}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-window">
      <div className="order-title">order summary</div>
      {CartData.map((item, index) =>
        orderItem(index, item.title, item.price, item.discountPercentage)
      )}
      <div className="order-summary">
        <div className="summary-top">
          <div className="summary-top-items">
            <span>TOTAL ({countActiveItems()} items)</span>
            <span className="dot"></span>
            <span>{currencyExchange(totalPrice)}</span>
          </div>
        </div>
        <div className="summary-bot">
          <span>Saving {currencyExchange(totalDiscount)}</span>
        </div>
      </div>
      <div className="order-button-container">
        <div className="order-button">BUY</div>
      </div>
    </div>
  );
}
