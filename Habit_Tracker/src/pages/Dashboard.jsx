import { useNavigate } from "react-router-dom";
import HabitTracker1 from "../components/HabitTracker1";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <>
      <div className="navbar">
        <h2>Habit Tracker</h2>
        <button className="danger small" onClick={logout}>
          Logout
        </button>
      </div>

      <HabitTracker1 />
    </>
  );
}
