import { useEffect } from 'react'
import "./Work.css"

export const Work = () => {

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
        </div>
        <div className="commercial" id="commercial">
        </div>
        <div className="art" id="art">
        </div>


    </div>)
}