import mark from "../../images/mark.jpg"
import "./About.css"


export const About = () => {

    return (<div className="aboutPage" >
        <div className="aboutPageImage">
            <img
                src={mark}
                alt="Image of Mark" />
        </div>
        <div>
            <p className="aboutParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta. Imperdiet proin fermentum leo vel orci porta non pulvinar. Dictum non consectetur a erat nam at lectus urna. Est velit egestas dui id ornare arcu odio.
            </p>
        </div>
    </div>)
}