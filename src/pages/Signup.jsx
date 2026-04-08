import { Typography, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GlassCard from "../components/common/GlassCard";
import CustomButton from "../components/common/Button";
import { useAlert } from "../context/AlertContext";

export default function Signup() {
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  return (
    <div style={styles.container}>
      <GlassCard style={{ width: "600px", textAlign: "center" }}>
        
        <Typography variant="h4" gutterBottom>
          Signup
        </Typography>

        {/* Row 1 */}
        <Box style={styles.row}>
          <TextField
            label="First Name"
            size="small"
            fullWidth
            onChange={(e) => setForm({ ...form, First_Name: e.target.value })}
          />
          <TextField
            label="Last Name"
            size="small"
            fullWidth
            onChange={(e) => setForm({ ...form, Last_Name: e.target.value })}
          />
        </Box>

        {/* Row 2 */}
        <Box style={styles.row}>
          <TextField
            label="Email"
            size="small"
            fullWidth
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <TextField
            label="Password"
            type="password"
            size="small"
            fullWidth
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </Box>

        {/* Row 3 */}
        <Box style={styles.row}>
          <TextField
            label="Phone"
            size="small"
            fullWidth
            onChange={(e) => setForm({ ...form, Phone: e.target.value })}
          />
          
          <TextField
            label="Address (Optional)"
            size="small"
            fullWidth
            onChange={(e) => setForm({ ...form, Address: e.target.value })}
          />
        </Box>

        <CustomButton
          text="Signup"
          onClick={() => {
            console.log(form); // useful later
            showAlert("Signup Successful!", "success");
            navigate("/dashboard");
          }}
        />

        {/* 🔥 NAVIGATION LINK */}
        <Typography
          style={styles.link}
          onClick={() => navigate("/")}
        >
          Already have an account? Login
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
  row: {
    display: "flex",
    gap: "15px",
    marginBottom: "15px"
  },
  link: {
    marginTop: "15px",
    textAlign: "center",
    cursor: "pointer",
    color: "#00c6ff",
    fontSize: "14px"
  }
};