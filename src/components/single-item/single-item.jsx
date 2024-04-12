import "./single-item-styles.css"
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
export default function SingleItem({ searchId }) {

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
        <div className="container-singleItem">
            <div className="header-singleItem">
                Category:  laptops
            </div>
            <div className="body-singleItem">
                <div className="body-left-singleItem">
                    <div className="img-singleItem">
                        <img alt="xd" src="https://cdn.dummyjson.com/product-images/4/thumbnail.jpg" />
                    </div>
                </div>
                <div className="body-right-singleItem">
                    <div className="right-header-sigleItem">
                        <div className="title-sigleItem">
                            HP Pavilion 15-DK1056WM
                        </div>
                        <div className="colorful-border"></div>
                    </div>
                    <div className="right-body-sigleItem">
                        <div className="right-body-price-sigleItem">
                            <div className="price-head-sigleItem">
                                <span>Brand: HP Pavilion</span>
                            </div>
                            <div className="price-body-sigleItem">
                                <span className="current-price-body">999 $</span>
                                <span className="discount-price-body">1200 $</span>
                                <span className="percent-price-body">6.16 % lower</span>
                            </div>
                            <div className="price-footer-sigleItem">
                                {rating(4)}
                            </div>
                        </div>
                        <div className="right-body-cart-sigleItem">
                            <div className="icon-sigleItem"><FiShoppingCart /></div>
                            <div className="stock-sigleItem">
                                <span>89</span>
                                <span>left</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-footer-sigleItem">
                        <div className="colorful-border"></div>
                    </div>
                </div>
            </div>
            <div className="footer-singleItem">
                <span>HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10</span>
            </div>
        </div>
    )
}