import { useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { TestNavBar } from "./components/nav/TestNav"


export const MarkThomas = () => {

  return <>
    {/* <NavBar /> */}
    <TestNavBar /> 
    <ApplicationViews />
  </>
}