import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./common/routes/Home";
import Navbar from "./common/components/Navbar/Navbar";
import DisplayProducts from "./common/routes/DisplayProducts";
import ProductDetail from "./common/components/ProductDetail/ProductDetail";
import Footer from "./common/components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/displayProducts" element={<DisplayProducts />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
