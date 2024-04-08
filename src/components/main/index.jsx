import "./styles.css"
import Navbar from "../navbar/navbar"
import Banner from "../banner/banner"
import ImageCarousel from "../image-carousel/carousel"
import ProductsList from "../products/products"
export default function Main(){
    return (
        <div className="container kantumruy">
            <div className="main-window">
                <Navbar></Navbar>
                <Banner></Banner>
                <ImageCarousel></ImageCarousel>
                <Banner></Banner>
                <ImageCarousel></ImageCarousel>
                <ProductsList></ProductsList>
            </div>
        </div>        
    )
}