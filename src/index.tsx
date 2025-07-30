import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { config } from "./config"
import { SequenceConnect } from "@0xsequence/connect"

function Dapp() {
  return (
    <SequenceConnect config={config}>
      <App />
    </SequenceConnect>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Dapp />
  </React.StrictMode>
)

