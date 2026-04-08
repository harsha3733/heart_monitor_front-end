import { useEffect } from "react";

export default function CustomAlert({ alert, setAlert }) {
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  if (!alert) return null;

  const colors = {
    success: "#4caf50",
    error: "#f44336",
    warning: "#ff9800",
    info: "#2196f3"
  };

  return (
    <div style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      padding: "15px 25px",
      borderRadius: "10px",
      color: "white",
      background: colors[alert.type],
      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      zIndex: 9999,
      backdropFilter: "blur(10px)"
    }}>
      {alert.message}
    </div>
  );
}