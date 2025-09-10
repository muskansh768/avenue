import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import Teams from "./Pages/Teams";
import Service from "./Pages/Service";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <Router>
        <nav class="navbar navbar-expand-lg bg-white py-3 mb-4">
          <div class="container">
            <a class="navbar-brand" href="#">Avenue Design</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/" className="nav-link text-blue fw-bold active">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" className="nav-link text-blue fw-bold">About Us</Link>
                </li>
                <li class="nav-item">
                  <Link to="/service" className="nav-link text-blue fw-bold">Services</Link>
                </li>
                <li class="nav-item">
                  <Link to="/career" className="nav-link text-blue fw-bold">Career</Link>
                </li>
                <li class="nav-item">

                  <Link to="/team" className="nav-link text-blue fw-bold">Teams</Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" className="nav-link text-blue fw-bold">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/service" element={<Service></Service>}></Route>
          <Route path="/Career" element={<Career></Career>}></Route>
          <Route path="/team" element={<Teams></Teams>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  )
}

export default App;