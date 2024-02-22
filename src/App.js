import "./App.css";
import Front from "./components/front";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
import Navbar from "./components/navbar";
import About from "./components/underuniversity/about";
import Contact from "./components/contact";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" Component={Front} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/profile" Component={Profile} />
          <Route path="/navbar" Component={Navbar} />
          <Route path="/contact" Component={Contact} />
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
