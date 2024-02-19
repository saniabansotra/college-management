import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
  const [userdata, setuserdata] = useState();
  const getUserData = async () => {
    try {
      const response = await axios.get("/currentuser");
      if (response.data.success) {
        setuserdata(response.data.data);
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Session timed out! Login again");
        navigate("/login");
      } else if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        toast.error(error.response.data.error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get("/logout");
      if (response.data.success) {
        toast.success("You were logged out successfully!");
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
  useEffect(() => {
    getUserData();
  }, []);
  if (userdata)
    return (
      <>
        <div className="mainbody">
          <h1> welcome to profile</h1>
          <h1>Hello {userdata.name}, Welcome Back!</h1>
          <p>
            Age :
            {new Date().getFullYear() - new Date(userdata.dob).getFullYear()}{" "}
            years
          </p>
          <p>email : {userdata.email}</p>
          <p>Under 18? : {userdata.isUnder18 ? "Yes" : "No"}</p>
          <p>Phone number : {userdata.phonenumber} </p>
          <button type="button" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      </>
    );
};

export default Profile;
