import { useState } from "react";
import { loginUser } from "./authUtils";

export default function Login({ onLogin, onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const res = loginUser(email, password);
    if (res.error) setError(res.error);
    else onLogin();
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password"
        onChange={e => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
      <p onClick={() => onSwitch("signup")}>Create account</p>
    </div>
  );
}
