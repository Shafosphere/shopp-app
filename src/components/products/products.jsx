import { useEffect, useState } from "react";
import "./products.css"
import { GiHamburgerMenu } from "react-icons/gi";

export default function ProductsList() {
    const [items, setItems] = useState();

    useEffect(() => {
        fetchItemData();
    }, []);

    async function fetchItemData() {
        try {
            const localdata = await fetch(
                'https://dummyjson.com/products?limit=12'
            );
            const jsonData = await localdata.json();
            setItems(jsonData);
        }
        catch (error) {
            console.error('Error, cannot take data:', error);
        }
    }

    function click() {
        console.log(items)
    }

    function Elements() {
        if (items) {
            return (
                <div className="products-list">
                    {items.products.map((item, index) => (
                        <div key={index} className="items-container">
                            <div className="item-top">
                                <img alt={item.title} src={item.thumbnail} />
                            </div>
                            <div className="item-bot" >
                                <span>{item.title}</span>
                                <span>{item.rating}</span>
                                <span>{item.price}</span>
                            </div>
                        </div>

                    ))}
                </div>
            );
        }
        return null;
    }
    return (
        <div className="container-products">
            <div className="main-products">
                <div className="products-top">
                    <span onClick={click} className="products-menu"> list <GiHamburgerMenu /> </span>
                </div>
                <div className="products-bot">
                    <Elements />
                </div>
            </div>
        </div>
    )
}

