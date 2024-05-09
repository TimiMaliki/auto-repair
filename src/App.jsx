import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/Router/Router";
import ScrollToTop from "../src/components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
