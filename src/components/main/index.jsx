import "./styles.css"
import Navbar from "../navbar/navbar"
import Banner from "../banner/banner"
import ImageCarousel from "../image-carousel/carousel"
export default function Main(){
    return (
        <div className="container kantumruy">
            <div className="main-window">
                <Navbar></Navbar>
                <Banner></Banner>
                <ImageCarousel></ImageCarousel>
                <Banner></Banner>
                <ImageCarousel></ImageCarousel>
            </div>
        </div>        
    )
}