import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import MakeItRain from "@/components/MakeItRain"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MakeItRain count={30} color="green" />
        <App />
    </StrictMode>
)
