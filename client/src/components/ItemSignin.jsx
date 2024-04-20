import { Link } from "react-router-dom";
import "./ItemSignup.css";
import { useState } from "react";

export default function ItemSignin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data)
  }

  return (
    <div className="main-li-container">
      <h1 className="signup-head">Sign In</h1>
      <form>
        <div className="item-list">
          <label className="class-label" htmlFor="email">
            Email
          </label>
          <input
            className="class-input"
            type="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            name="email"
            autoFocus
          />
        </div>
        <div className="item-list">
          <label className="class-label" htmlFor="password">
            Password
          </label>
          <input
            className="class-input"
            onChange={handleChange}
            value={formData.password}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="item-list">
          <button className="signup-button" type="submit">
            Sign In
          </button>
        </div>
        <div className="decoy-div">
          <p className="signin-text">
            Don&apos;t Have an account?{" "}
            <Link className="signin-link" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
