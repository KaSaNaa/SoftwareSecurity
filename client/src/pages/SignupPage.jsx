import "./signupPage.css";
import Banking from "../components/Banking";
import ItemSignup from "../components/ItemSignup";

const SignupPage = () => {
  return (
    <div>
      <div className="all-in-signup">
      <ItemSignup />
      <Banking />
    </div>
    </div>
  )
}

export default SignupPage