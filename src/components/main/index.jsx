import "./styles.css"
import Navbar from "../navbar/navbar"
import Banner from "../banner/banner"
export default function Main(){
    return (
        <div className="container kantumruy">
            <div className="main-window">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </div>        
    )
}