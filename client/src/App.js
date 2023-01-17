import { Navbar, Home, Footer, } from "./components";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Router>
        <div>
          <div>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
