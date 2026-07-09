import { useEffect, useState } from "react";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import HabitTracker1 from "./components/HabitTracker1";
import { getCurrentUser, logoutUser } from "./auth/authUtils";
import "./index.css";
   
function App() {
  const [page, setPage] = useState("login");

  useEffect(() => {
    if (getCurrentUser()) setPage("habits");
  }, []);

  return (
    <div>
      {page === "login" &&
        <Login onLogin={() => setPage("habits")} onSwitch={setPage} />
      }

      {page === "signup" &&
        <Signup onSwitch={setPage} />
      }

      {page === "habits" &&
        <>
          <button onClick={() => {
            logoutUser();
            setPage("login");
          }}>
            Logout
          </button>
          <HabitTracker1 />
        </>
      }
    </div>
  );
}

export default App;