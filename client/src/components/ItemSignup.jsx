import { Link } from "react-router-dom";
import "./ItemSignup.css";
import { useState } from "react";

export default function ItemSignup() {
  const [formData, setFormData] = useState({
    name: "",
    nic: "",
    bankAccountNumber : "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert(data.message)
  };

  return (
    <div className="main-li-container">
      <h1 className="signup-head">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="item-list">
          <label className="class-label" htmlFor="name">
            Name
          </label>
          <input
            className="class-input"
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            autoFocus
          />
        </div>

        <div className="item-list">
          <label className="class-label" htmlFor="nic">
            NIC Number
          </label>
          <input
            className="class-input"
            type="text"
            id="nic"
            name="nic"
            onChange={handleChange}
            value={formData.nic}
          />
        </div>

        <div className="item-list">
          <label className="class-label" htmlFor="account">
            Account Number
          </label>
          <input
            className="class-input"
            type="text"
            id="account"
            name="bankAccountNumber"
            onChange={handleChange}
            value={formData.bankAccountNumber}
          />
        </div>

        <div className="item-list">
          <label className="class-label" htmlFor="email">
            Email
          </label>
          <input
            className="class-input"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="item-list">
          <label className="class-label" htmlFor="password">
            Password
          </label>
          <input
            className="class-input"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="item-list">
          <label className="class-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="class-input"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>

        <div className="item-list">
          <button className="signup-button" type="submit">
            Sign Up
          </button>
        </div>

        <div className="decoy-div">
          <p className="signin-text">
            Already have an account??{" "}
            <Link className="signin-link" to="/signin">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
