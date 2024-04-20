import { Link } from "react-router-dom";
import "./ItemSignup.css";

export default function ItemSignup() {
  return (
    <div className="main-li-container">
      <h1 className="signup-head">Sign In</h1>
      <form>
        <div className="item-list">
          <label className="class-label" htmlFor="name">
            Name
          </label>
          <input
            className="class-input"
            type="text"
            id="name"
            name="name"
            autoFocus
          />
        </div>
        <div className="item-list">
          <label className="class-label" htmlFor="nic">
            NIC Number
          </label>
          <input className="class-input" type="text" id="nic" name="nic" />
        </div>
        <div className="item-list">
          <label className="class-label" htmlFor="account">
            Account Number
          </label>
          <input
            className="class-input"
            type="text"
            id="account"
            name="account"
          />
        </div>
        <div className="item-list">
          <label className="class-label" htmlFor="email">
            Email
          </label>
          <input className="class-input" type="email" id="email" name="email" />
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
