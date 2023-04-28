import { useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"


export const MarkThomas = () => {

  return <>
    <NavBar />
    <ApplicationViews />
  </>
}