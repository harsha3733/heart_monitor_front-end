import {
  Typography,
  TextField,
  MenuItem,
  Box
} from "@mui/material";
import CustomButton from "../components/common/Button";
import GlassCard from "../components/common/GlassCard";
import { useState } from "react";
import { useAlert } from "../context/AlertContext";
import Layout from "../components/layout/Layout";   // ✅ already there

export default function Profile() {
  const { showAlert } = useAlert();
  const [form, setForm] = useState({});

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <Layout>   {/* 🔥 IMPORTANT FIX */}
      <div style={styles.container}>
        
        <GlassCard style={{ width: "700px" }}>

          {/* PERSONAL INFO */}
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>

          <Box style={styles.row}>
            <TextField label="First Name" fullWidth
              onChange={(e) => handleChange("First_Name", e.target.value)} />
            <TextField label="Last Name" fullWidth
              onChange={(e) => handleChange("Last_Name", e.target.value)} />
          </Box>

          <Box style={styles.row}>
            <TextField label="Phone" fullWidth
              onChange={(e) => handleChange("Phone", e.target.value)} />
            <TextField label="Address" fullWidth
              onChange={(e) => handleChange("Address", e.target.value)} />
          </Box>

          {/* HEALTH INFO */}
          <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
            Health Information
          </Typography>

          <Box style={styles.row}>
            <TextField label="Age" fullWidth
              onChange={(e) => handleChange("Age", e.target.value)} />
            <TextField label="BMI" fullWidth
              onChange={(e) => handleChange("BMI", e.target.value)} />
          </Box>

          <Box style={styles.row}>
            <TextField select label="Sex" fullWidth
              onChange={(e) => handleChange("Sex", e.target.value)}>
              <MenuItem value={0}>Female</MenuItem>
              <MenuItem value={1}>Male</MenuItem>
            </TextField>

            <TextField select label="Smoking" fullWidth
              onChange={(e) => handleChange("Smoking", e.target.value)}>
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={1}>Occasional</MenuItem>
              <MenuItem value={2}>Regular</MenuItem>
            </TextField>
          </Box>

          <Box style={styles.row}>
            <TextField select label="Alcohol" fullWidth
              onChange={(e) => handleChange("Alcohol", e.target.value)}>
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={1}>Occasional</MenuItem>
              <MenuItem value={2}>Regular</MenuItem>
            </TextField>

            <TextField select label="Diabetes" fullWidth
              onChange={(e) => handleChange("Diabetes", e.target.value)}>
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={1}>Yes</MenuItem>
            </TextField>
          </Box>

          <Box style={styles.row}>
            <TextField label="Systolic BP" fullWidth
              onChange={(e) => handleChange("Systolic_BP", e.target.value)} />
            <TextField label="Diastolic BP" fullWidth
              onChange={(e) => handleChange("Diastolic_BP", e.target.value)} />
          </Box>

          <Box style={styles.center}>
            <TextField
              label="Cholesterol"
              style={{ width: "50%" }}
              onChange={(e) => handleChange("Cholesterol", e.target.value)}
            />
          </Box>

          <CustomButton
            text="Save Profile"
            onClick={() => {
              console.log(form);
              showAlert("Profile Saved Successfully!", "success");
            }}
          />

        </GlassCard>

      </div>
    </Layout>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "40px",
    minHeight: "100vh"
  },
  row: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px"
  }
};