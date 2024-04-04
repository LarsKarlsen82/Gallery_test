import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "./footer"; // Assuming your footer component is exported as default from "./footer"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
  rootElement
);
