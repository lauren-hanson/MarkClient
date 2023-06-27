import { useEffect, useState } from 'react'
import { getMedias } from "../../managers/MediaManager.js"
import "./Work.css"

export const Work = () => {

    // const [medias, setMedias] = useState([])

    // useEffect(() => {
    //     getMedias().then((mediaInfo) => setMedias(mediaInfo))
    // })

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".workPage > div")
            const navigationLinks = document.querySelectorAll(".navigation a")

            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.offsetHeight

                if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionTop + sectionHeight - 50) {
                    section.classList.add("active")
                    const sectionId = section.getAttribute("id")
                    navigationLinks.forEach((link) => {
                        if (link.getAttribute("href") === `#${sectionId}`) {
                            link.classList.add("active")
                        } else {
                            link.classList.remove("active")
                        }
                    })
                } else {
                    section.classList.remove("active")
                }
            })
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (<div className="workPage">
        {/* <div>
            {medias.map((m) => {
                return <div>{m.type}</div>
            })}
        </div> */}
        <nav className="navigation">
            <ul>
                <li>
                    <a href="#film">Film & TV</a>
                </li>
                <li>
                    <a href="#commercial">Commercial</a>
                </li>
                <li>
                    <a href="#art">Art Direction</a>
                </li>
            </ul>
        </nav>
        <div className="film" id="film">
            <img src='https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80' />
        </div>
        <div className="commercial" id="commercial">
            <img
                src='https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80' />
        </div>
        <div className="art" id="art">
            <img
                src='https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80' />
        </div>


    </div>)
}