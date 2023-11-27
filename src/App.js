import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./common/components/Navbar/Navbar";
import Footer from "./common/components/Footer/Footer";
import RoutesComponent from "./common/routes/RoutesComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content-wrapper">
          <RoutesComponent />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
