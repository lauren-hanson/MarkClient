import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { MarkThomas } from "./MarkThomas" 
import "./index.css"

//Renders MarkThomas component in browser
const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <MarkThomas />
    </BrowserRouter>
)
