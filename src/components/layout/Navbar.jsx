import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div style={styles.navbar}>
      <h3 style={{ cursor: "pointer" }} onClick={() => navigate("/dashboard")}>
        ❤️ Heart Monitor
      </h3>

      <div style={styles.links}>
        <span
          style={isActive("/dashboard") ? styles.active : styles.link}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </span>

        <span
          style={isActive("/profile") ? styles.active : styles.link}
          onClick={() => navigate("/profile")}
        >
          Profile
        </span>

        <span
          style={styles.link}
          onClick={() => navigate("/")}
        >
          Logout
        </span>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",   // ✅ important
    padding: "2px 50px",    // 🔥 reduced height
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.05)",
    borderBottom: "1px solid rgba(255,255,255,0.2)"
  },

  links: {
    display: "flex",
    gap: "25px",
    alignItems: "center"    // ✅ align text properly
  },

  link: {
    cursor: "pointer",
    color: "white",
    transition: "0.3s"
  },

  active: {
    cursor: "pointer",
    color: "#00c6ff",
    borderBottom: "2px solid #00c6ff"
  }
};