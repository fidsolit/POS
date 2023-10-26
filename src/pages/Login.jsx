import React from "react";
import "../assets/Styles/login.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import {
//   loginStart,
//   loginSuccess,
//   loginFailure,
// } from "../Redux/AuthenticationSlice";

const Login = () => {
  const navigate = useNavigate();

  // const LOGIN_START = useSelector((state) => state.loginStart.value);
  const [username, setusername] = useState();
  const [pass, setpass] = useState();
  return (
    <>
      <div className="container-fluid">
        <div className="row" data-aos="fade-right">
          <div className="col-lg-6">
            <img
              style={{
                width: "90%",
                margin: "3rem auto",
                boxSizing: "border-box",
                borderRadius: "10rem",
                height: "auto",
                padding: "5rem",
              }}
              src="login image.avif"
            ></img>
          </div>
          <div className="col-lg-5  p-3  ">
            <div>
              <div className="row">
                <img
                  className="rounded-circle w-25 "
                  style={{ margin: "1rem auto" }}
                  src="fcodes logo.png"
                />
              </div>

              <form className="row d-flex formStyle rounded-pill">
                <div className="row mt-3">
                  {" "}
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                  />
                </div>
                <div className="row mt-3">
                  {" "}
                  <input
                    type="password"
                    onChange={(e) => {
                      setpass(e.target.value);
                    }}
                    placeholder="Password"
                  />
                </div>
                <div className="row mt-3">
                  <div
                    className="d-flex   justify-content-between "
                    style={{ maxWidth: "520px", marginLeft: "9rem" }}
                  >
                    <p>Remember me</p>
                    <p>Forgot Password?</p>
                  </div>
                  <div className="row"></div>
                  <button
                    className="btn-login"
                    onClick={(event) => {
                      event.preventDefault();
                      console.log(
                        "this is your username and password",
                        username,
                        pass
                      );
                      if (username == "Angel" && pass == "123") {
                        navigate("/Pos");
                      } else alert("Invalid username and password");
                    }}
                  >
                    LOGIN
                  </button>
                </div>

                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
