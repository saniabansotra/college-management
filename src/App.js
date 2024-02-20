import "./App.css";
import Front from "./components/front";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <Route path="/home" Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
