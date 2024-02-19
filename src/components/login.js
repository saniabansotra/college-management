import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [isOtpSent, setisOtpSent] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [otp, setotp] = useState(null);
  const handleLogin = async () => {
    try {
      if (email.trim() === "") return toast.warning("Please enter your email");
      if (password.trim() === "")
        return toast.warning("Please enter your password");
      const response = await axios.post("/login", {
        useremail: email,
        userpassword: password,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setisOtpSent(true);
      }
    } catch (error) {
      console.log(error);
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        toast.error(error.response.data.error);
      }
    }
  };
  const handleOtpVerify = async () => {
    try {
      if (email.trim() === "") return toast.warning("Please enter your email");
      if (password.trim() === "")
        return toast.warning("Please enter your password");
      const response = await axios.post("/mfaverify", {
        useremail: email,
        userpassword: password,
        code: otp,
      });
      if (response.data.success) {
        toast.success("Welcome to Famebook!");
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        toast.error(error.response.data.error);
      }
    }
  };
  return (
    <>
      <div className="mainbody">
        <h1>Login on FLAMEBOOK</h1>
        <form>
          <div>
            <label>Enter your Email</label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
            />
          </div>
          <div>
            <label>Enter your Password</label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
            />
          </div>

          {isOtpSent ? (
            <>
              <div>
                <label>Enter OTP sent on your phone number</label>
                <input
                  value={otp}
                  onChange={(e) => setotp(e.target.value)}
                  type="number"
                />
              </div>
            </>
          ) : (
            <></>
          )}

          <div>
            <button
              type="button"
              onClick={() => {
                if (isOtpSent) {
                  handleOtpVerify();
                } else {
                  handleLogin();
                }
              }}
              style={{
                backgroundColor: "red",
                color: "white",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </div>
          <p>
            New to FLAMEBOOK?
            <span
              onClick={() => navigate("/signup")}
              style={{ cursor: "pointer", color: "violet" }}
            >
              {" "}
              Register here
            </span>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
