import React, { useState } from 'react'
import { ReelData } from './ReelData'
import "./Home.css"


export const HomeReel = () => {

    const [index, setIndex] = useState(0)
    const delay = 2500

    const timeoutRef = React.useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === ReelData.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        )
        return () => {
            resetTimeout()
        }
    }, [index])

    return (
        <div className="slideshowContainer">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {ReelData.map((image, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundImage: `url(${image.image})` }} >

                    </div>
                ))}
            </div>
            <div className="slideshowDots">
                {ReelData.map((_, idx) => (
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