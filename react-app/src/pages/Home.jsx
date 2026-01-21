import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import "./Home.css";
export default function Home() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container">
      <h1>Home</h1>
      <p>Página principal</p>

      <nav style={{ marginTop: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        {!user && (
          <Link to="/login" style={{ marginRight: "10px" }}>
            Login
          </Link>
        )}
        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </nav>

      {user && <p>Bienvenido, {user.name}!</p>}
    </div>
  );
}
