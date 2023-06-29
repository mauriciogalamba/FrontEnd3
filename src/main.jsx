import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./Contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("body")).render(
  //<React.StrictMode>
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  //</React.StrictMode>,
);
