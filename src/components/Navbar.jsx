// src/components/Navbar.jsx

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#0f172a",
        color: "white",
        padding: "20px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>CivicConnect</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </Link>

        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/report"
        >
          Report Issue
        </Link>

        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/dashboard"
        >
          Dashboard
        </Link>

        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/admin"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;