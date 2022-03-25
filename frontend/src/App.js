import react from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
