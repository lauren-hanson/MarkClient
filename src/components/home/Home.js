// import { Footer } from "../footer/Footer"
import "./Home.css"
import mark from "../../images/mark.jpg"

export const Home = () => {

    return (<div className="homePage">
        <div className="homePageImage">
            <img 
                src={mark}
                alt="Image of Mark"/>
        </div>
        {/* <Footer /> */}
    </div>)
}