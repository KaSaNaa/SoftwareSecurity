import { Link } from "react-router-dom";
import "./ItemSignup.css";

export default function ItemSignin() {
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
