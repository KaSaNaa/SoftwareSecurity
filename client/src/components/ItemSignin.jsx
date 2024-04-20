import "./ItemSignup.css";
import { Form, Link } from "react-router-dom";
export default function ItemSignin() {
  return (
    <div className="main-li-container">
      <h1 className="signup-head">Sign In</h1>
      <Form>
        <ul>
          <li className="item-list">
            <label className="class-label">Email</label>
            <input className="class-input" type="email"></input>
          </li>
          <li className="item-list">
            <label className="class-label">Password</label>
            <input className="class-input" type="password"></input>
          </li>

          <li className="item-list">
            <button className="signup-button">Sign In</button>
          </li>
          <div className="decoy-div">
            <li className="item-list">
              <p className="signin-text">
                Don&apos;t Have an account?{" "}
                <button className="signin-link">
                  <span>
                    <Link to={"/signin"}>Sign up</Link>
                  </span>
                </button>
              </p>
            </li>
          </div>
        </ul>
      </Form>
    </div>
  );
}
