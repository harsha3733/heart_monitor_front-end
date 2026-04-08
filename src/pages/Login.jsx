import { Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GlassCard from "../components/common/GlassCard";
import { useState } from "react";
import { useAlert } from "../context/AlertContext";

export default function Login() {
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  return (
    <div style={styles.container}>
      <GlassCard style={{ width: "380px", textAlign: "center" }}>
        
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          size="small"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          size="small"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button
          variant="contained"
          fullWidth
          style={styles.button}
          onClick={() => {
            showAlert("Login Successful!", "success");
            navigate("/dashboard");
          }}
        >
          Login
        </Button>

        {/* 🔥 NAVIGATION LINK */}
        <Typography
          style={styles.link}
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Signup
        </Typography>

      </GlassCard>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginTop: "10px"
  },
  link: {
    marginTop: "15px",
    textAlign: "center",
    cursor: "pointer",
    color: "#00c6ff",
    fontSize: "14px"
  }
};