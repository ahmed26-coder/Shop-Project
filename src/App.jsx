import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Faund from "./Components/Faund";
import Wishlist from "./pages/Wishlist"

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<Faund />} />
          <Route path="/Wishlist" element={<Wishlist />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
