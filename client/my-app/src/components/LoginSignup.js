import React from "react";
import { Link } from "react-router-dom";

export const LoginSignup = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form
          className="border p-4 rounded text-dark text-uppercase"
          style={{
            width: "90%", // Adjusted width for responsiveness
            maxWidth: "400px", // Added max-width to prevent form from getting too wide on larger screens
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <h3>LogIn Here</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <Link to="/*">password?</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export const SignUp = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form
          className="border p-4 rounded text-dark text-uppercase"
          style={{
            width: "90%", // Adjusted width for responsiveness
            maxWidth: "400px", // Added max-width to prevent form from getting too wide on larger screens
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <h3 className="text-center mb-3">Sign Up</h3>
          <div className="mb-3">
            <label className="form-label">First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-dark">
              Sign Up
            </button>
          </div>
          <p className="text-center mt-3 mb-0">
            Already registered?{" "}
            <a href="/sign-in" className="text-primary">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </>
  );
};
