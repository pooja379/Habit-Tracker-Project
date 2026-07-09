import { useState } from "react";
import { signupUser } from "./authUtils";

export default function Signup({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    const res = signupUser(email, password);
    if (res.error) setError(res.error);
    else onSwitch("login");
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password"
        onChange={e => setPassword(e.target.value)} />

      <button onClick={handleSignup}>Signup</button>
      <p onClick={() => onSwitch("login")}>Already have account?</p>
    </div>
  );
}
