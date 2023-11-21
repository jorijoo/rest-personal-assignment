import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./common/components/Navbar/Navbar";
import Footer from "./common/components/Footer/Footer";
import RoutesComponent from "./common/routes/RoutesComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <RoutesComponent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
