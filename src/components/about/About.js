import mark from "../../images/mark.jpg"
import "./About.css"

export const About = () => { 
    
    return (<div className="aboutPage">
        <div className="aboutPageImage">
            <img 
                src={mark}
                alt="Image of Mark"/>
        </div>
    </div>)
}