import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css"

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
