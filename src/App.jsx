import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Pos from "./pages/Pos";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/Styles/app.css";

function App() {
  return (
    <div className="App mainwrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Pos" element={<Pos />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
