import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Blogs from "./pages/Blogs";
import Faqs from "./pages/Blogs";
import './styles/App.css';
import './styles/Footer.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
