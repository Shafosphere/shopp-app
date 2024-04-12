import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import "./styles-search-result.css"

export default function SearchResult({ searchItem, AddItemToCart, currencyExchange }) {
    const [localData, setData] = useState();

    useEffect(() => {
        fetchItemData();
    }, [searchItem]);

    async function fetchItemData() {
        let checkItem = searchItem.item;
        if(checkItem == undefined){checkItem = searchItem}
        try {
            const localdata = await fetch(
                `https://dummyjson.com/products/category/${checkItem}`
            );
            const jsonData = await localdata.json();
            setData(jsonData);
        }
        catch (error) {
            console.error('Error, cannot take data:', error);
        }
    }
    if (localData) {
        return (
            <div className="container-search">

                {localData.products.map((item, index) => (
                    <Item AddItemToCart={AddItemToCart} currencyExchange={currencyExchange} key={index} item={item} index={index}/>
                ))}

            </div>
        )
    }
}

function Item({ item, AddItemToCart, currencyExchange }) {
    let localDiscount = (((item.price * (100 + item.discountPercentage)) / 100))
    function rating(rating) {
        const stars = Array.from({ length: Math.floor(rating) }, (_, index) => (
            < AiFillStar />
        ));
        if (stars.length < 5) {
            stars.push(
                <AiOutlineStar />
            )
        }
        return <>{stars}</>;
    }
    return (
        <div className="item-search">
            <div className="left-search">
                <img alt="xd" src={item.thumbnail} />
            </div>
            <div className="right-search">
                <div className="right-search-top">
                    <div className="search-prices ">
                        <div className="prices-left ">
                            <div className="prices-left-top prices-padding">
                                <span>{currencyExchange(item.price)}</span>
                            </div>
                            <div className="prices-left-bot">
                                <div className="prices-discount prices-padding">{localDiscount.toFixed(2)} $</div>
                                <div className="prices-discount-percent">
                                    <span className="percent-top">{item.discountPercentage} %</span>
                                    <span className="percent-bot">lower</span>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => AddItemToCart(item.id)} className="cart-right">
                            <FiShoppingCart />
                        </div>
                    </div>
                    <div className="search-names prices-padding">
                        <span className="search-title">{item.title}</span>
                        <span className="search-brand">Brand: {item.brand}</span>
                    </div>
                    <div className="search-rating prices-padding">
                        <div className="rating-container">
                            <div className="search-stars">{rating(item.rating)}</div>
                            <div className="rating-number">{item.rating}</div>
                        </div>
                    </div>
                </div>
                <div className="right-search-bot prices-padding">
                    <span className="search-description">{item.description}</span>
                </div>
            </div>
        </div>
    )
}