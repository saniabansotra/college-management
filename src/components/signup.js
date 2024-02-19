import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [date, setdate] = useState("");
  const [number, setnumber] = useState(null);
  const [isUnder18, setisUnder18] = useState(false);
  const handleRegister = async () => {
    try {
      if (name.trim() === "") return toast.warning("Please enter your name");
      if (password.trim() === "")
        return toast.warning("Please enter your password");
      if (email.trim() === "") return toast.warning("Please enter your email");
      if (date.trim() === "") return toast.warning("Please enter your date");
      if (!number) return toast.warning("Please enter your number");
      const response = await axios.post("/signup", {
        email: email,
        password: password,
        name: name,
        dob: date,
        phonenumber: number,
        isUnder18: isUnder18,
      });
      if (response.data.success) {
        toast.success("Successfully registered");
        navigate("/login");
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
        <h1>Register on FLAMEBOOK</h1>
        <form>
          <div>
            <label>Enter your Name</label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label>Enter your Email</label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
            />
          </div>
          <div>
            <label>Create your Password</label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
            />
          </div>
          <div>
            <label>Enter your Date of birth</label>
            <input
              value={date}
              onChange={(e) => setdate(e.target.value)}
              type="date"
            />
          </div>
          <div>
            <label>Enter your Phone Number</label>
            <input
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              type="number"
            />
          </div>
          <div>
            <label>Are you under 18?</label>
            <input
              checked={isUnder18}
              onChange={(e) => setisUnder18(e.target.checked)}
              type="checkbox"
            />
          </div>
          <div>
            <button
              onClick={() => handleRegister()}
              type="button"
              style={{
                backgroundColor: "red",
                color: "white",
                cursor: "pointer",
              }}
            >
              REGISTER
            </button>
          </div>
          <p>
            Already on FLAMEBOOK?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ cursor: "pointer", color: "violet" }}
            >
              Signin here
            </span>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
