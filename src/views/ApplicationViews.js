import { Route, Routes } from "react-router-dom"
import { Home } from "../components/home/Home"
import { Work } from "../components/work/Work"
import { About } from "../components/about/About"
import { ContactForm } from "../components/contact/ContactForm"
import { NavBar } from "../components/nav/NavBar"
import { Footer } from "../components/footer/Footer"

export const ApplicationViews = ({ token, setToken }) => {
  return (
    <>
      <NavBar /> 
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>

        <Route path="/work">
          <Route index element={<Work />} />
        </Route>

        <Route path="/about">
          <Route index element={<About />} />
        </Route>

        <Route path="/contact">
          <Route index element={<ContactForm />} />
        </Route>

      </Routes>
      <Footer /> 
    </>
  )
}


