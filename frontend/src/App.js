import react from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route to="/" element={<Home />}></Route>
        <Route to="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
