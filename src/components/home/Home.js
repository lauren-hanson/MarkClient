// import { Footer } from "../footer/Footer"
import { HomeReel } from "./HomeReel"
import mark from "../../assets/homePageImage.jpeg"
import "./Home.css"

export const Home = () => {

    return (
        <>
            <div className="homePage">
                <div className="homePageImage">
                    <img
                        
                        src={mark}
                        alt="Image of Mark" />

                    <p class="centered">neque ornare aenean</p>
                </div>
                <div className="paragraph">
                    <p >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta. Imperdiet proin fermentum leo vel orci porta non pulvinar. Dictum non consectetur a erat nam at lectus urna. Est velit egestas dui id ornare arcu odio.
                    </p>
                </div>
                <div>
                    <HomeReel />
                </div>
            </div>
        </>
    )
}