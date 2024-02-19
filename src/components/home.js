import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mainbody">
        <h1>Welcome to the FAMEBOOK!</h1>
        <p>Let's get fame together 😊</p>
        <button
          onClick={() => navigate("/signup")}
          style={{ cursor: "pointer" }}
        >
          Let's Start
        </button>
      </div>
    </>
  );
};

export default Home;
