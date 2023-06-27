import React, { useState } from 'react'
import { ReelData } from './ReelData'
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import "./Home.css"


export const HomeReel = ({ slides }) => {

    const [index, setIndex] = useState(0)
    const colors = ["#0088FE", "#00C49F", "#FFBB28"]
    const delay = 2500

    const timeoutRef = React.useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    // const length = slides.length

    React.useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        )
        return () => { 
            resetTimeout()
        }
    }, [index])

    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // }

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }

    // if (!Array.isArray(slides) || slides.length <= 0) {
    //     return null
    // }

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundColor }} />
                ))}
            </div>
            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}></div>
                ))}
            </div>
        </div>
    )
}